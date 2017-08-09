// import Task from './Task'
// import Lead from './Lead'

const User = `
type User {
  id: ID!
  email: String!
  name: String
  tasks: [Task]
  sentLeads: [Lead]
  receivedLeads: [Lead]
}
`

export default [User]
