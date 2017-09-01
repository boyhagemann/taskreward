import Reward from './Reward'
import Lead from './Lead'

const Profile = `
type Profile {
  id: ID!
  name: String
  description: String
  rewards: [Reward]
  leads: [Lead]
  lead(id: ID!): Lead
  user: User
}
`

export default [Profile, ...Reward, ...Lead]
