import CreatedLead from './CreatedLead'
import AssignedReward from './AssignedReward'

const Event = `
  union Event = CreatedLead | AssignedReward
`

export default [Event, CreatedLead, AssignedReward]
