import User from './User'
import Task from './Task'
import Event from './Event'

const Lead = `
type Lead {
  id: ID
  user: User
  task: Task
  parent: Lead
  description: String
  status: String
  depth: Int
  events: [Event]
}
`

export default [Lead, ...User, Event]
