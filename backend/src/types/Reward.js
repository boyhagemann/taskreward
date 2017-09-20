// import User from './User' // Don't need to call this, because of recursive dependency
// import Profile from './Profile'

const Reward = `
type Reward {
  id: ID
  createdAt: String
  incentive: Incentive
  lead: Lead
  actor: Lead
  value: Int
  depth: Int
}
`

export default [Reward]
