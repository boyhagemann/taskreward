import { session, transformOne, transformMany, uuid, handleError, encrypt } from './helpers'
import { getIncentiveByReward } from './Incentive'
import { getLeadByReward } from './Lead'
import { createEvent } from './Event'
import moment from 'moment'
import { REWARD_CUT } from '../constants'

export const createReward = ({ id, root, lead, incentive, value, depth }) => {

  session
  .run(`
    MATCH (a:Lead { id: $lead })
    MATCH (b:Incentive { id: $incentive })
    CREATE (c:Reward $props)
    CREATE (a)-[:RECEIVED_REWARD { createdAt: $createdAt }]->(c)
    CREATE (b)-[:RECEIVED_REWARD { createdAt: $createdAt }]->(c)
    RETURN c
  `,
    {
      lead,
      incentive,
      createdAt: moment().format(),
      props: {
        id: id || uuid(),
        createdAt: moment().format(),
        depth,
        value: value * Math.pow(REWARD_CUT, depth) / REWARD_CUT,
      }
    }
  )
  .then(result => transformOne(result, session))
  .then(reward => createEvent({
    type: 'RECEIVED_REWARD',
    root,
    lead,
    incentive,
    reward: reward.id,
  }))
  .catch(handleError)
}

export const getRewardByEvent = id => session
  .run(`
    MATCH (a:Reward)--(:Event { id: $id })
    RETURN a LIMIT 1
  `, { id })
  .then(result => transformOne(result, session))

export const findRewardsForUserNotYetPaidOut = id => session
  .run(`
    MATCH (r:Reward)<-[:RECEIVED_REWARD]-(:Lead)<-[:HAS_LEAD]-(u:User { id: $id })
    WHERE NOT ( (r)-[:HAS_PAYMENT]->(:Payment)<-[:HAS_PAYMENT]-(u) )
    RETURN DISTINCT r
    ORDER BY r.createdAt
  `, { id })
  .then(result => transformMany(result, session))
  .catch(handleError)

export const findRewardsByPayment = id => session
  .run(`
    MATCH (r:Reward)-[:HAS_PAYMENT]->(:Payment { id: $id })
    RETURN DISTINCT r
    ORDER BY r.createdAt
  `, { id })
  .then(result => transformMany(result, session))
  .catch(handleError)

export default {
  incentive: reward => getIncentiveByReward(reward.id),
  lead: reward => getLeadByReward(reward.id),
}
