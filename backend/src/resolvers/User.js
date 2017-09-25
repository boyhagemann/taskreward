import jwt from 'jsonwebtoken'
import { session, transformOne, transformMany, uuid, handleError, encrypt } from './helpers'
import { findRewardsForUserNotYetPaidOut } from './Reward'
import { findLeadsForUser } from './Lead'
import { findPaymentsForUser, canRequestPayment, getPayment } from './Payment'
import { getProfileByUser } from './Profile'
import { SECRET } from '../constants'

const withPassword = (data, password) => {
  const salt = uuid()
  return { ...data, password: encrypt(password, salt) , salt }
}

export const createUser = input => {

  const data = {
    ...input,
    id: input.id || uuid(),
  }

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

export const createUserFromSession = key => session
  .run(`
    CREATE (a:User $props)
    RETURN a
  `,
    {
      props: {
        id: uuid(),
        session: key,
      }
    }
  )
  .then(result => transformOne(result, session))
  .catch(handleError)

export const updateUser = (input, { id }) => {

  // const props = password ? withPassword(data, password) : data


  return session
  .run(`
    MATCH (a:User { id: $id })
    SET a += $input
    RETURN a
  `,
    { id, input }
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

export const getUserByLead = id => session
  .run(`
    MATCH (a:User)-[:HAS_LEAD]->(:Lead { id: $id })
    RETURN a LIMIT 1
  `, { id })
  .then(result => transformOne(result, session))

export const getUserByPayment = id => session
  .run(`
    MATCH (a:User)-[:HAS_PAYMENT]->(:Payment { id: $id })
    RETURN a LIMIT 1
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
  payment: (user, { id }) => getPayment(id), // @todo Check if user is allowed
}
