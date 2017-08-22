// import Reward from './Reward'
// import Lead from './Lead'
import Profile from './Profile'

const User = `
type User {
  id: ID!
  email: String
  name: String
  role: String
  rewards: [Reward]
  sentLeads: [Lead]
  receivedLeads: [Lead]
  profile: Profile
}
`

export default [User, ...Profile]
