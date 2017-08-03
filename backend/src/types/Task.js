// import User from './User' // Don't need to call this, because of recursive dependency
import Lead from './Lead'

const Task = `
type Task {
  id: ID
  owner: User
  name: String
  description: String
  link: String
  leads: [Lead]
}
`

export default [Task, ...Lead]
