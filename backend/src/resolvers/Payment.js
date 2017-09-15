import { session, transformOne, transformMany, uuid, handleError } from './helpers'
import { unique } from 'shorthash'

export const createPayment = (_, { input }) => session
  .run(`
    MATCH (b:User { id: $user })
    CREATE (a:Payment $props)
    CREATE (b)-[r:HAS_PAYMENT]->(a)
    RETURN a
  `,
    {
      user: input.user,
      props: { id: uuid(), ...input }
    }
  )
  .then(result => transformOne(result, session))
  .catch(handleError)

export const findPaymentsForUser = id => session
  .run(`
    MATCH (a:Payment)<-[r:HAS_PAYMENT]-(b:User { id: $id })
    RETURN a
  `, { id })
  .then(result => transformMany(result, session))
  .catch(handleError)

export default {
  // profile: (reward) => getProfile(reward.profile),
}
