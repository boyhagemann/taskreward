
export default `
  type ReceivedReward {
    id: ID!
    createdAt: String!
    depth: Int!
    value: Int!
    cut: Float!
    user: User
    lead: Lead
    incentive: Incentive
  }
`
