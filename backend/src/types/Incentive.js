// import User from './User' // Don't need to call this, because of recursive dependency
// import Profile from './Profile'

const Incentive = `
type Incentive {
  id: ID
  profile: Profile
  name: String
  description: String
  action: String
  link: String
  value: Int
}
`

export default [Incentive]
