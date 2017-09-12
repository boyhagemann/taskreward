// import User from './User' // Don't need to call this, because of recursive dependency
// import Profile from './Profile'

const Reward = `
type Reward {
  id: ID
  createdAt: String
  incentive: Incentive
  user: User
  value: Float
  depth: Int
}
`

export default [Reward]
