import Reward from './Reward'
import User from './User'
import Lead from './Lead'
import Event from './Event'

const RootQuery = `
type RootQuery {
  viewer: User
  rewards: [Reward]
  reward(id: ID!): Reward
  users: [User]
  leads: [Lead]
  lead(id: ID!): Lead
}
`

export default [RootQuery, ...User, ...Reward, ...Lead, Event]
