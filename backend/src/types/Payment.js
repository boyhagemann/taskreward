// import User from './User' // Don't need to call this, because of recursive dependency
// import Profile from './Profile'

const Payment = `
type Payment {
  id: ID
  createdAt: String
  rewards: [Reward]
  user: User
  value: Int
  currency: String
}
`

export default [Payment]
