import { getLeadByEvent } from './Lead'
import { getActionByEvent } from './Action'

export default ({
  lead: (event) => getLeadByEvent(event.id),
  action: (event) => getActionByEvent(event.id),
})
