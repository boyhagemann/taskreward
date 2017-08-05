import { session, transformOne, transformMany, id, handleError } from './helpers'
import { findTasksByUser } from './Task'
import { findLeadsFrom, findLeadsTo } from './Lead'

export const createUser = (_, { input }) => session
  .run(`
    CREATE (a:User $props)
    RETURN a
  `,
    { props: { id: id(), ...input } }
  )
  .then(result => transformOne(result, session))
  .catch(handleError)

export const getUsers = () => session
  .run(`
    MATCH (n1:User)
    RETURN n1
  `)
  .then(result => transformMany(result, session))
  .catch(handleError)

export const findUser = id => session
  .run(`
    MATCH (n1:User { id: $id })
    RETURN n1 LIMIT 1
  `, { id })
  .then(result => transformOne(result, session))
  .catch(handleError)

export default {
  tasks: (user) => findTasksByUser(user.id),
  sentLeads: (user) => findLeadsFrom(user.id),
  receivedLeads: (user) => findLeadsTo(user.id)
}
