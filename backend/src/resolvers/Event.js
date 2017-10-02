import { session, transformOne, transformMany, uuid, handleError } from './helpers'
import { findParents } from './Lead'
import moment from 'moment'
import pubsub from '../configuration/pubsub'


export const createEvent = ({ id, type, user, lead, friend, profile, action, incentive, reward }) => {

  const query = [
    `CREATE (event:Event $event)`,
  ]

  if(user) {
    query.push(`
      WITH event
      MATCH (user:User { id: $user })
      CREATE (user)-[:HAS_EVENT]->(event)
    `)
  }

  if(friend) {
    query.push(`
      WITH event
      MATCH (friend:Lead { id: $friend })
      CREATE (friend)-[:HAS_EVENT]->(event)
    `)
  }

  if(lead) {
    query.push(`
      WITH event
      MATCH (lead:Lead { id: $lead })
      CREATE (lead)-[:HAS_EVENT]->(event)
    `)
  }

  if(profile) {
    query.push(`
      WITH event
      MATCH (profile:Profile { id: $profile })
      CREATE (profile)-[:HAS_EVENT]->(event)
    `)
  }

  if(action) {
    query.push(`
      WITH event
      MATCH (action:Action { id: $action })
      CREATE (action)-[:HAS_EVENT]->(event)
    `)
  }

  if(incentive) {
    query.push(`
      WITH event
      MATCH (incentive:Incentive { id: $incentive })
      CREATE (incentive)-[:HAS_EVENT]->(event)
    `)
  }

  if(reward) {
    query.push(`
      WITH event
      MATCH (reward:Reward { id: $reward })
      CREATE (reward)-[:HAS_EVENT]->(event)
    `)
  }

  query.push(`
    RETURN event
  `)

  session
  .run(query.join(''),
    {
      user,
      root,
      lead,
      profile,
      action,
      incentive,
      reward,
      event: {
        id: id || uuid(),
        createdAt: moment().format(),
        type,
      },
    }
  )
  .then(result => transformOne(result, session))
  .then(event => {

    console.log('Sending result to WebSocket', event)
    pubsub.publish('event', { event }) // must be same name 'event' !!!

    return event
  })
  .catch(handleError)
}

export const viewedProfile = lead => createEvent({
  type: 'VIEWED_PROFILE', lead, action: 'action.viewed-profile', // @TODO Make this a constant
})

export const invitedFriend = (lead, friend) => createEvent({
  type: 'INVITED_FRIEND', lead, friend, action: 'action.invited-friend', // @TODO Make this a constant
})

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

      case 'VIEWED_PROFILE':
        return 'ViewedProfile'

      case 'PERFORMED_ACTION':
        return 'PerformedAction'

      case 'RECEIVED_REWARD':
        return 'ReceivedReward'

      default:
        throw new Error(`The Event '${obj.type}' is not implemented yet`)
    }

  }
}
