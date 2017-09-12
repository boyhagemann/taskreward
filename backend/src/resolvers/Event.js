import { session, transformOne, transformMany, id, handleError } from './helpers'
import { findParents } from './Lead'
import { REWARD_CUT } from '../constants'
import moment from 'moment'
import pubsub from '../configuration/pubsub'

export const assignIncentive = (_, { input }, { user }) => {

  session
  .run(`
    MATCH (a:User { id: $user })
    MATCH (b:Lead { id: $lead })
    MATCH (c:Incentive { id: $incentive })
    CREATE (d:Event { id: $props.id, createdAt: $props.createdAt, type: $props.type, value: c.value })
    CREATE (a)-[:HAS_EVENT]->(d)
    CREATE (b)-[:HAS_EVENT]->(d)
    CREATE (c)-[:HAS_EVENT]->(d)
    RETURN d
  `,
    {
      lead: input.lead,
      incentive: input.incentive,
      user: user.id,
      props: {
        id: id(),
        createdAt: moment().format(),
        type: 'ASSIGNED_INCENTIVE',
        ...input,
      }
    }
  )
  .then(result => transformOne(result, session))
  .then(result => {

    console.log('Sending result to WebSocket', result)
    pubsub.publish('event', { event: result }) // must be same name 'event' !!!

    return result
  })
  .then(async event => {

    const parents = await findParents(input.lead)
    console.log('parents', parents)

    parents.forEach( lead => {
      console.log('parent!!!', lead.id)
      receiveReward(input.lead, lead.id, input.incentive, event.value, lead.depth)
    })

  })
  .catch(handleError)
}

const receiveReward = (root, lead, incentive, value, depth) => {

  session
  .run(`
    MATCH (r:Lead { id: $root })
    MATCH (a:Lead { id: $lead })<-[:HAS_LEAD]-(u)
    MATCH (b:Incentive { id: $incentive })
    MERGE (d:Event { id: $id })
    ON CREATE SET d.id = $id, d.createdAt = $createdAt, d.type = $type, d.depth = $depth, d.value = $value, d.cut = $cut
    CREATE (r)-[:HAS_EVENT]->(d)
    CREATE (a)-[:HAS_EVENT]->(d)
    CREATE (b)-[:HAS_EVENT]->(d)
    CREATE (u)-[:HAS_EVENT]->(d)
    RETURN d
  `,
    {
      root,
      lead,
      incentive,
      id: id(),
      createdAt: moment().format(),
      type: 'RECEIVED_REWARD',
      depth,
      value,
      cut: value * Math.pow(REWARD_CUT, depth) / REWARD_CUT,
    }
  )
  .then(result => transformOne(result, session))
  .then(result => {
    console.log('Sending result to WebSocket', result)
    pubsub.publish('event', { event: result }) // must be same name 'event' !!!
    return result
  })
  .catch(handleError)
}

export const createEvent = (_, { input }, context) => {

  switch(input.type) {

    case 'ASSIGNED_INCENTIVE':
      return assignIncentive(null, { input }, context)

    default:
      throw new Error(`Event ${input.type} is not implemented yet.`)

  }
}

export const getEventsForLead = id => session
  .run(`
    MATCH (e:Event)<-[:HAS_EVENT]-(:Lead { id: $id })
    RETURN DISTINCT e
    ORDER BY e.createdAt
  `, { id })
  .then(result => transformMany(result, session))
  .catch(handleError)

export const getEventsForLeadAndType = (id, ofType) => session
  .run(`
    MATCH (e:Event { type: $ofType })<-[:HAS_EVENT ]-(:Lead { id: $id })
    RETURN DISTINCT e
    ORDER BY e.createdAt
  `, { id, ofType })
  .then(result => transformMany(result, session))
  .catch(handleError)


export default {

  // Resolve the Union type here...
  __resolveType(obj) {

    switch(obj.type) {

      case 'CREATED_LEAD':
        return 'CreatedLead'

      case 'ASSIGNED_INCENTIVE':
        return 'AssignedIncentive'

      case 'RECEIVED_REWARD':
        return 'ReceivedReward'

      default:
        throw new Error(`The Event '${obj.type}' is not implemented yet`)
    }

  }
}
