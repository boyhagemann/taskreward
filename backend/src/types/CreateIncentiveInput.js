
const CreateIncentiveInput = `
input CreateIncentiveInput {
  profile: ID!
  name: String!
  description: String
  link: String
  value: Int
}
`

export default CreateIncentiveInput
