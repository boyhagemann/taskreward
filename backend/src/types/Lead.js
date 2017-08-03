import User from './User'
import Task from './Task'
import Event from './Event'

const Lead = `
type Lead {
  id: ID
  from: User
  to: User
  task: Task
  description: String
  status: String
  events: [Event]
}
`

export default [Lead, ...User, Event]
