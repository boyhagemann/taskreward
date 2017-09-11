import CreatedLead from './CreatedLead'
import AssignedIncentive from './AssignedIncentive'
import ReceivedReward from './ReceivedReward'

const Event = `
  union Event = CreatedLead | AssignedIncentive | ReceivedReward
`

export default [Event, CreatedLead, AssignedIncentive, ReceivedReward]
