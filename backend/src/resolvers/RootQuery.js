import { getTasks, getTask } from './Task'
import { getUsers } from './User'
import { getLeads, getLead } from './Lead'

export default {
  viewer: (_, {}, { user }) => user,
  tasks: () => getTasks(),
  task: (_, { id }) => getTask(id),
  users: () => getUsers(),
  leads: () => getLeads(),
  lead: (_, { id }) => getLead(id),
}
