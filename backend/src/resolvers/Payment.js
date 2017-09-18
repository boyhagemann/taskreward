import { session, transformOne, transformMany, uuid, handleError } from './helpers'
import { unique } from 'shorthash'
import moment from 'moment'
import { findRewardsForUserNotYetPaidOut, findRewardsByPayment } from './Reward'
import { getUserByPayment } from './User'

export const createPayment = ({ user }) => findRewardsForUserNotYetPaidOut(user)
  .then( rewards => ({
    rewards: rewards.map(reward => reward.id),
    currency: 'EUR',
    value: rewards.reduce( (total, reward) => total + reward.value, 0),
    createdAt: moment().format(),
  }))
  .then( ({ rewards, value, currency, createdAt }) => session
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
        createdAt,
        props: {
          id: uuid(),
          value,
          currency,
          createdAt,
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

export const getPaymentByUser = id => session
  .run(`
    MATCH (a:Payment)<-[r:HAS_PAYMENT]-(b:User { id: $id })
    RETURN a
    LIMIT 1
  `, { id })
  .then(result => transformOne(result, session))
  .catch(handleError)

export default {
  user: payment => getUserByPayment(payment.id),
  rewards: payment => findRewardsByPayment(payment.id),
}
