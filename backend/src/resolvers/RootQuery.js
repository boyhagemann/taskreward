import { getTasks } from './Task'
import { getUsers } from './User'
import { getLeads } from './Lead'

export default {
  tasks: () => getTasks(),
  users: () => getUsers(),
  leads: () => getLeads()
}
