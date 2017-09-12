import { session, transformOne, transformMany, id, handleError, encrypt } from './helpers'
import { getIncentiveByReward } from './Incentive'
import moment from 'moment'

export const createReward = (_, { input }) => session
  .run(`
    MATCH (b:User { id: $user })
    MATCH (c:Lead { id: $lead })
    MATCH (d:Incentive { id: $incentive })
    CREATE (a:Reward $props)
    CREATE (b)-[:HAS_REWARD]->(a)
    CREATE (c)-[:HAS_REWARD]->(a)
    CREATE (d)-[:HAS_REWARD]->(a)
    RETURN a
  `,
    {
      user: input.user,
      lead: input.lead,
      incentive: input.incentive,
      props: {
        ...input,
        id: id(),
        createdAt: moment().format(),
      }
    }
  )
  .then(result => transformOne(result, session))
  .catch(handleError)

export const findRewardsForUserNotYetPaidOut = id => session
  .run(`
    MATCH (r:Reward)<-[:HAS_REWARD]-(u:User { id: $id })
    OPTIONAL MATCH (r)-[:HAS_PAYMENT]->(p:Payment)<-[:HAS_PAYMENT]-(u)
    WHERE r IS NULL
    RETURN DISTINCT r
    ORDER BY r.createdAt
  `, { id })
  .then(result => transformMany(result, session))
  .catch(handleError)

export default {
  incentive: reward => getIncentiveByReward(reward.id)
}
