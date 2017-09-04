import { getUserByEvent } from './User'
import { getLeadByEvent } from './Lead'
import { getRewardByEvent } from './Reward'

export default ({
  reward: (event) => getRewardByEvent(event.id),
  lead: (event) => getLeadByEvent(event.id),
  user: (event) => getUserByEvent(event.id),
})
