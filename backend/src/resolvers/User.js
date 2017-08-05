import { session, transformOne, transformMany, id, handleError, encrypt } from './helpers'
import { findTasksByUser } from './Task'
import { findLeadsFrom, findLeadsTo } from './Lead'

const withPassword = (data, password) => {
  const salt = id()
  return { ...data, password: encrypt(password, salt) , salt }
}

export const createUser = (_, { input }) => {

  const data = { id: id(), ...input }
  const props = input.password ? withPassword(data, input.password) : data

  return session
  .run(`
    CREATE (a:User $props)
    RETURN a
  `,
    { props }
  )
  .then(result => transformOne(result, session))
  .catch(handleError)
}

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
