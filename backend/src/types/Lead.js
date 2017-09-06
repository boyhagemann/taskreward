import User from './User'
import Profile from './Profile'
import Event from './Event'

const Lead = `
type Lead {
  id: ID
  createdAt: String
  hash: String
  motivation: String
  user: User
  profile: Profile
  parent: Lead
  status: String
  source: String
  depth: Int
  score: Float
  invited: [Lead]
  events: [Event]
}
`

export default [Lead, ...Event]
