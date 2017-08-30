import User from './User'
import Profile from './Profile'
// import Event from './Event'

const Lead = `
type Lead {
  id: ID
  hash: String
  user: User
  profile: Profile
  parent: Lead
  status: String
  depth: Int
  invited: [Lead]
  events: [Event]
}
`

export default [Lead]
