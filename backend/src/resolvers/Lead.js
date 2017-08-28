import { session, transformOne, transformMany, id, handleError, cookieExists, getUserFromCookie, } from './helpers'
import { getUser, createUserFromSession } from './User'
import { getReward } from './Reward'
import { getProfileByLead } from './Profile'
import { unique } from 'shorthash'

export const createLead = (_, { input }) => session
  .run(`
    MATCH (b:Lead { hash: $hash })
    MATCH (c:User { id: $user })
    CREATE (a:Lead $props)
    CREATE (b)-[:HAS_LEAD]->(a)
    CREATE (c)-[:HAS_LEAD]->(a)
    RETURN a
  `,
    {
      user: input.user,
      hash: input.parentHash,
      props: {
        id: id(),
        hash: input.hash || unique(id()),
        ...input
      }
    }
  )
  .then(result => transformOne(result, session))
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

export const getLead = id => session
  .run(`
    MATCH (a:Lead { id: $id })
    MATCH (a)<-[HAS_LEAD*]-(b:Reward)
    RETURN a, b.id AS reward
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

export const getParent = id => session
  .run(`
    MATCH (:Lead { id: $id })<-[:HAS_LEAD]-(a:Lead)
    MATCH (a)<-[HAS_LEAD*]-(b:Reward)
    RETURN a, b.id AS reward
  `, { id })
  .then(result => transformOne(result, session))
  .catch(handleError)

export const findLeadForUserAndHash = (userId, hash) => session
  .run(`
    MATCH (:User { id: $userId })-[:HAS_LEAD]->(a:Lead)<-[r:HAS_LEAD*]-(:Lead { hash: $hash })
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
  user: (lead) => getUser(lead.user),
  parent: (lead) => getParent(lead.id),
}
