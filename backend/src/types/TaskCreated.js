import Event from './Event'
import Task from './Task'
import User from './User'

const TaskCreated = `
type TaskCreated implements Event {
  task: Task!
  user: User!
}
`

export default [TaskCreated, Event, ...Task, ...User]
