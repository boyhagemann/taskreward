import Event from './Event'
import Reward from './Reward'
import User from './User'

const RewardCreated = `
type RewardCreated implements Event {
  reward: Reward!
  user: User!
}
`

export default [RewardCreated, Event, ...Reward, ...User]
