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
  parents: [Lead]
  status: String
  source: String
  color: String
  depth: Int
  score: Float
  invited: [Lead]
  events(
    ofType: String
  ): [Event]
}
`

export default [Lead, ...Event]
