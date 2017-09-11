
const CreateMilestoneInput = `
input CreateMilestoneInput {
  profile: ID!
  name: String!
  description: String
  link: String
  value: Int!
  event: String!
  incentive: String
  operator: String
  count: Int
}
`

export default CreateMilestoneInput
