
export default `
  type AssignedIncentive {
    id: ID!
    createdAt: String!
    value: Int!
    user: User
    lead: Lead
    incentive: Incentive
  }
`
