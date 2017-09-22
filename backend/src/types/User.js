// import Lead from './Lead'
import Reward from './Reward'
import Payment from './Payment'
import Profile from './Profile'

const User = `
type User {
  id: ID
  name: String
  firstName: String
  middleName: String
  lastName: String
  email: String
  telephone: String
  role: String
  bankaccount: String
  rewards: [Reward]
  payments: [Payment]
  payment(
    id: ID!
  ): Payment
  leads: [Lead]
  profile: Profile
}
`

export default [User, ...Profile, ...Reward, ...Payment]
