import { getUserByEvent } from './User'
import { getLeadByEvent } from './Lead'
import { getIncentiveByEvent } from './Incentive'

export default ({
  incentive: (event) => getIncentinveByEvent(event.id),
  lead: (event) => getLeadByEvent(event.id),
  user: (event) => getUserByEvent(event.id),
})
