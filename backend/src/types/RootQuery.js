import Task from './Task'
import User from './User'
import Lead from './Lead'
import Event from './Event'

const RootQuery = `
type RootQuery {
  tasks: [Task]
  task(id: ID!): Task
  users: [User]
  leads: [Lead]
  lead(id: ID!): Lead
}
`

export default [RootQuery, ...User, ...Task, ...Lead, Event]
