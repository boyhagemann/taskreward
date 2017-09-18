import { session, transformOne, transformMany, uuid, handleError, cookieExists, getUserFromCookie, } from './helpers'
import { getUserByLead, createUserFromSession } from './User'
import { getProfileByLead } from './Profile'
import { getEventsForLead, getEventsForLeadAndType, createEvent } from './Event'
import { unique } from 'shorthash'
import moment from 'moment'

export const createLead = ({ id, user, parent, hash, source, motivation, status, score }) => session
  .run(`
    MATCH (b:Lead { id: $parent })
    MATCH (c:User { id: $user })
    CREATE (a:Lead $lead)
    CREATE (b)-[:HAS_LEAD]->(a)
    CREATE (c)-[:HAS_LEAD]->(a)
    RETURN a
  `,
    {
      user,
      parent,
      lead: {
        id: id || uuid(),
        createdAt: moment().format(),
        hash: hash || unique(uuid()),
        source: source || 'unknown',
        motivation,
        status,
        score,
      },
    }
  )
  .then(result => transformOne(result, session))
  .then(lead => {
    createEvent({
      type: 'VIEWED_PROFILE',
      lead: lead.id,
      action: 'action.viewed-profile', // @TODO Make this a constant
    })
    return lead
  })
  .catch(handleError)

export const getLeads = () => session
  .run(`
    MATCH (a:Lead)<-[r:HAS_LEAD]-(:Lead)
    RETURN a
  `)
  .then(result => transformMany(result, session))
  .catch(handleError)

export const findLeadsForProfile = id => session
  .run(`
    MATCH (a:Lead)<-[r:HAS_LEAD*]-(:Profile { id: $id })
    WITH a, max(size(r)) AS depth
    RETURN a, depth
  `, { id })
  .then(result => transformMany(result, session))
  .catch(handleError)

export const findLeadsForUser = id => session
  .run(`
    MATCH (a:Lead)<-[r:HAS_LEAD]-(:User { id: $id })
    RETURN a
  `, { id })
  .then(result => transformMany(result, session))
  .catch(handleError)

export const findParents = id => session
  .run(`
    MATCH (:Lead { id: $id })<-[r:HAS_LEAD*]-(a:Lead)
    WITH a, max(size(r)) AS depth
    RETURN a, depth
  `, { id })
  .then(result => transformMany(result, session))
  .catch(handleError)

export const getLead = id => session
  .run(`
    MATCH (a:Lead { id: $id })
    RETURN a
  `, { id })
  .then(result => transformOne(result, session))
  .catch(handleError)

export const getLeadByHash = hash => session
  .run(`
    MATCH (a:Lead { hash: $hash })
    RETURN a
  `, { hash })
  .then(result => transformOne(result, session))
  .catch(handleError)

export const getLeadByEvent = id => session
  .run(`
    MATCH (a:Lead)--(:Event { id: $id })
    RETURN a LIMIT 1
  `, { id })
  .then(result => transformOne(result, session))

export const getLeadByReward = id => session
  .run(`
    MATCH (a:Lead)-[:RECEIVED_REWARD]->(:Reward { id: $id })
    RETURN a LIMIT 1
  `, { id })
  .then(result => transformOne(result, session))

export const getParent = id => session
  .run(`
    MATCH (:Lead { id: $id })<-[:HAS_LEAD]-(a:Lead)
    RETURN a
  `, { id })
  .then(result => transformOne(result, session))
  .catch(handleError)

export const getChildrenBySource = (id, source) => session
  .run(`
    MATCH (a:Lead { source: $source })<-[:HAS_LEAD]-(:Lead { id: $id })
    RETURN a
  `, { id, source })
  .then(result => transformMany(result, session))
  .catch(handleError)

export const findLeadForUserAndHash = (userId, hash) => session
  .run(`
    MATCH (:User { id: $userId })-[:CREATES]->(a:Lead)<-[r:HAS_LEAD*]-(:Lead { hash: $hash })
    RETURN a
  `, { userId, hash })
  .then(result => transformOne(result, session))
  .catch(handleError)

export const findLeadByProfile = profile => session
  .run(`
    MATCH (a:Lead)<-[r:HAS_LEAD]-(:Profile { id: $profile })
    RETURN a
  `, { profile })
  .then(result => transformOne(result, session))
  .catch(handleError)

export const redirect = async (hash, session, user) => {

  // If we don't have a user, we want to create a new user,
  // based on the current session ...
  const userId = user ? user.id : createUserFromSession(session).id

  // Do we have an existing lead?
  const lead = await findLeadForUserAndHash(userId, hash)

  // Yes, just return it or create one for this user...
  return lead || createLead(null, { input: {
    user: userId, hash, status: 'some-status',
  } })
}

export default {
  profile: (lead) => getProfileByLead(lead.id),
  user: (lead) => getUserByLead(lead.id),
  parent: (lead) => getParent(lead.id),
  invited: (lead) => getChildrenBySource(lead.id, 'invitation'),
  events: (lead, { ofType }) => ofType ? getEventsForLeadAndType(lead.id, ofType) : getEventsForLead(lead.id),
}
