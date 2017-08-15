import { session, transformOne, transformMany, id, handleError, cookieExists, getUserFromCookie, } from './helpers'
import { getUser, createUserFromSession } from './User'
import { getTask } from './Task'
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
      hash: input.hash,
      props: { id: id(), hash: unique(id()),  ...input }
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

export const findLeadsForTask = id => session
  .run(`
    MATCH (a:Lead)<-[r:HAS_LEAD*]-(:Task { id: $id })
    WITH a, max(size(r)) AS depth
    RETURN a, depth
  `, { id })
  .then(result => transformMany(result, session))
  .catch(handleError)

export const getLead = id => session
  .run(`
    MATCH (a:Lead { id: $id })
    MATCH (a)<-[HAS_LEAD*]-(b:Task)
    RETURN a, b.id AS task
  `, { id })
  .then(result => transformOne(result, session))
  .catch(handleError)

export const getParent = id => session
  .run(`
    MATCH (:Lead { id: $id })<-[:HAS_LEAD]-(a:Lead)
    MATCH (a)<-[HAS_LEAD*]-(b:Task)
    RETURN a, b.id AS task
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

export const findLeadByTask = task => session
  .run(`
    MATCH (a:Lead)<-[r:HAS_LEAD]-(:Task { id: $task })
    RETURN a
  `, { task })
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
  task: (lead) => getTask(lead.task),
  user: (lead) => getUser(lead.user),
  parent: (lead) => getParent(lead.id),
}
