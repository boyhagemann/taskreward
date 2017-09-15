import Action from './Action'
import Incentive from './Incentive'
import Lead from './Lead'

const Profile = `
type Profile {
  id: ID!
  name: String
  description: String
  actions(
    withGlobal: Boolean
  ): [Action]
  incentives: [Incentive]
  leads: [Lead]
  lead(id: ID!): Lead
  user: User
}
`

export default [Profile, ...Incentive, ...Action, ...Lead]
