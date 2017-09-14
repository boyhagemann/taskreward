import Action from './Action'
import Incentive from './Incentive'
import Milestone from './Milestone'
import Lead from './Lead'

const Profile = `
type Profile {
  id: ID!
  name: String
  description: String
  actions: [Action]
  incentives: [Incentive]
  milestones: [Milestone]
  leads: [Lead]
  lead(id: ID!): Lead
  user: User
}
`

export default [Profile, ...Incentive, ...Milestone, ...Lead]
