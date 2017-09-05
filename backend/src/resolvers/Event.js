import { session, transformOne, transformMany, id, handleError } from './helpers'
import moment from 'moment'
import pubsub from '../configuration/pubsub'

export const assignReward = (_, { input }, { user }) => {

  session
  .run(`
    MATCH (a:User { id: $user })
    MATCH (b:Lead { id: $lead })
    MATCH (c:Reward { id: $reward })
    CREATE (d:Event { id: $props.id, createdAt: $props.createdAt, type: $props.type, value: c.value })
    CREATE (a)-[:HAS_EVENT]->(d)
    CREATE (b)-[:HAS_EVENT]->(d)
    CREATE (c)-[:HAS_EVENT]->(d)
    RETURN d
  `,
    {
      lead: input.lead,
      reward: input.reward,
      user: user.id,
      props: {
        id: id(),
        createdAt: moment().format(),
        type: 'ASSIGNED_REWARD',
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
  .catch(handleError)
}

export const createEvent = (_, { input }, context) => {

  switch(input.type) {

    case 'ASSIGNED_REWARD':
      return assignReward(null, { input }, context)

    default:
      throw new Error(`Event ${input.type} is not implemented yet.`)

  }
}

export const getEventsForLead = id => session
  .run(`
    MATCH (e:Event)<-[:HAS_EVENT]-(:Lead { id: $id })
    RETURN e
    ORDER BY e.createdAt
  `, { id })
  .then(result => transformMany(result, session))
  .catch(handleError)

export default {

  // Resolve the Union type here...
  __resolveType(obj) {

    switch(obj.type) {

      case 'CREATED_LEAD':
        return 'CreatedLead'

      case 'ASSIGNED_REWARD':
        return 'AssignedReward'

      default:
        throw new Error(`The Event '${obj.type}' is not implemented yet`)
    }

  }
}
