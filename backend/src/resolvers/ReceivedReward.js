import { getRewardByEvent } from './Reward'
import { getIncentiveByEvent } from './Incentive'
import { getLeadByEvent } from './Lead'

export default ({
  incentive: event => getIncentiveByEvent(event.id),
  lead: event => getLeadByEvent(event.id),
  reward: event => getRewardByEvent(event.id),
})
