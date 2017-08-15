import { session, transformOne, transformMany, id, handleError, encrypt } from './helpers'
import { findTasksByUser } from './Task'

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

export const getUser = id => session
  .run(`
    MATCH (n1:User { id: $id })
    RETURN n1 LIMIT 1
  `, { id })
  .then(result => transformOne(result, session))

export const findUserByEmail = email => session
  .run(`
    MATCH (n1:User { email: $email })
    RETURN n1 LIMIT 1
  `, { email })
  .then(result => transformOne(result, session))

export const isValidPassword = (password, salt, hash) => encrypt(password, salt) === hash

export default {
  tasks: (user) => findTasksByUser(user.id)
}
