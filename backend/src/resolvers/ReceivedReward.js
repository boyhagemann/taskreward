import { getRewardByEvent } from './Reward'
import { getLeadByEvent } from './Lead'
import { getIncentiveByEvent } from './Incentive'

export default ({
  incentive: (event) => getIncentiveByEvent(event.id),
  lead: (event) => getLeadByEvent(event.id),
  reward: (event) => getRewardByEvent(event.id),
})
