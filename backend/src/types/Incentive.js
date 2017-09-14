// import User from './User' // Don't need to call this, because of recursive dependency
// import Profile from './Profile'

const Incentive = `
type Incentive {
  id: ID
  profile: Profile
  action: Action
  name: String
  description: String
  value: Int
  operator: String
  count: Int
  startsAt: String
  endsAt: String
}
`

export default [Incentive]
