// import User from './User' // Don't need to call this, because of recursive dependency
// import Profile from './Profile'

const Reward = `
type Reward {
  id: ID
  profile: Profile
  name: String
  description: String
  link: String
  value: Int
}
`

export default [Reward]
