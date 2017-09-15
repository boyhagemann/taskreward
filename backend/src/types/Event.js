import ViewedProfile from './ViewedProfile'
import PerformedAction from './PerformedAction'
import ReceivedReward from './ReceivedReward'

const Event = `
  union Event = ViewedProfile | PerformedAction | ReceivedReward
`

export default [Event, ViewedProfile, PerformedAction, ReceivedReward]
