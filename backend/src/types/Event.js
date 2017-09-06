import CreatedLead from './CreatedLead'
import AssignedReward from './AssignedReward'
import ReceivedReward from './ReceivedReward'

const Event = `
  union Event = CreatedLead | AssignedReward | ReceivedReward
`

export default [Event, CreatedLead, AssignedReward, ReceivedReward]
