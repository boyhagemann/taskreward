import Task from './Task'
import User from './User'
import Lead from './Lead'
import Event from './Event'

const RootQuery = `
type RootQuery {
  tasks: [Task]
  users: [User]
  leads: [Lead]
}
`

export default [RootQuery, ...User, ...Task, ...Lead, Event]