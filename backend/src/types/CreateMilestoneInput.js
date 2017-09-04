
const CreateMilestoneInput = `
input CreateMilestoneInput {
  profile: ID!
  name: String!
  description: String
  link: String
  value: Int!
  event: String!
  reward: String
  operator: String
  count: Int
}
`

export default CreateMilestoneInput
