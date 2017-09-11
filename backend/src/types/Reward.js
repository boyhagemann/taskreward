// import User from './User' // Don't need to call this, because of recursive dependency
// import Profile from './Profile'

const Reward = `
type Reward {
  id: ID
  incentive: Incentive
  user: User
  value: Int
}
`

export default [Reward]
