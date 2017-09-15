import { getActionByEvent } from './Action'
import { getLeadByEvent } from './Lead'

export default ({
  lead: (event) => getLeadByEvent(event.id),
  action: (event) => getActionByEvent(event.id),
})
