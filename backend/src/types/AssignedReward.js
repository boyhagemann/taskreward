
export default `
  type AssignedReward {
    id: ID!
    createdAt: String!
    value: Int!
    user: User
    lead: Lead
    reward: Reward
  }
`
