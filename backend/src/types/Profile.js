import Reward from './Reward'
import Milestone from './Milestone'
import Lead from './Lead'

const Profile = `
type Profile {
  id: ID!
  name: String
  description: String
  rewards: [Reward]
  milestones: [Milestone]
  leads: [Lead]
  lead(id: ID!): Lead
  user: User
}
`

export default [Profile, ...Reward, ...Milestone, ...Lead]
