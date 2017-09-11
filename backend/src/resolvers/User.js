import jwt from 'jsonwebtoken'
import { session, transformOne, transformMany, id, handleError, encrypt } from './helpers'
import { findRewardsForUserNotYetPaidOut } from './Event'
import { findLeadsForUser } from './Lead'
import { findPaymentsForUser } from './Payment'
import { getProfileByUser } from './Profile'
import { SECRET } from '../constants'

const withPassword = (data, password) => {
  const salt = id()
  return { ...data, password: encrypt(password, salt) , salt }
}

export const createUser = (_, { input }) => {

  console.log('Creating User', input)

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

export const createUserFromSession = key => {

  const props = { id: id(), session: key }

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

  export const getUserByEvent = id => session
    .run(`
      MATCH (a:User)--(:Event { id: $id })
      RETURN a LIMIT 1
    `, { id })
    .then(result => transformOne(result, session))

export const isValidPassword = (password, salt, hash) => encrypt(password, salt) === hash

export const getUserByToken = token => {
  const decoded = jwt.verify(token, SECRET)
  return getUser(decoded.id)
}

export default {
  name: ({ firstName, middleName, lastName }) => [firstName, middleName, lastName].filter(value => value).join(' '),
  profile: (user) => getProfileByUser(user.id),
  leads: (user) => findLeadsForUser(user.id),
  rewards: (user) => findRewardsForUserNotYetPaidOut(user.id),
  payments: (user) => findPaymentsForUser(user.id),
}
