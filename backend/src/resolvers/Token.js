import { session, transformOne, transformMany, id, handleError, encrypt } from './helpers'
import { findUser } from './User'
import { findLeadsForTask } from './Lead'

const getToken = (email, password, salt) => session
  .run(`
    MATCH (b:User { email: $email, password: $password })
    OPTIONAL MATCH (b)-[:HAS_TOKEN]->(c:Token)
    DETACH DELETE c
    CREATE (a:Token { token: $token })
    CREATE (b)-[:HAS_TOKEN]->(a)
    RETURN a
    `,
    {
      email,
      password: encrypt(password, salt),
      token: id()
    }
  )

const handleInvalidCredentials = error => {
  if(error.name && error.name === 'TransformException') {
    return { message: 'Unauthorized'}
  }
  throw error
}

export const requestToken = (_, { email, password }) => session
  .run(`
    MATCH (a:User {email: $email})
    RETURN a LIMIT 1
    `, { email })
  .then(result => transformOne(result, session))
  .then( ({ salt }) => getToken(email, password, salt))
  .then(result => transformOne(result, session))
  .catch(handleInvalidCredentials)
  .catch(handleError)

export const isValidToken = () => true

export default {
  user: (token) => findUser(token.user),
}
