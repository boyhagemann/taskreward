import Task from './Task'
// import Lead from './Lead'

const User = `
type User {
  id: ID!
  email: String!
  tasks: [Task]
  leads: [Lead]
}
`


export default [User]
