import { session, transformOne, transformMany, uuid, handleError } from './helpers'
import { findRewardsForUserNotYetPaidOut } from './Reward'
import { unique } from 'shorthash'
import moment from 'moment'

export const createPayment = ({ user }) => findRewardsForUserNotYetPaidOut(user)
  .then( rewards => ({
    rewards: rewards.map(reward => reward.id),
    currency: 'EUR',
    value: rewards.reduce( (total, reward) => total + reward.value, 0)
  }))
  .then( ({ rewards, value, currency }) => session
    .run(`
      MATCH (b:User { id: $user })
      CREATE (a:Payment $props)
      CREATE (b)-[:HAS_PAYMENT { createdAt: $createdAt }]->(a)
      WITH a
      MATCH (r:Reward)
      WHERE r.id IN ($rewards)
      CREATE (r)-[:HAS_PAYMENT { createdAt: $createdAt }]->(a)
      RETURN a
      `,
      {
        user,
        rewards,
        createdAt: moment().format(),
        props: {
          id: uuid(),
          value,
          currency,
        }
      }
    )
    .then(result => transformOne(result, session))
    .catch(handleError)
  )




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
