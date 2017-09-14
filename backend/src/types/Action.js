// import User from './User' // Don't need to call this, because of recursive dependency
// import Profile from './Profile'

const Action = `
type Action {
  id: ID
  profile: Profile
  incentives: [Incentive]
  name: String
}
`

export default [Action]
