import { getTasks, findTask } from './Task'
import { getUsers } from './User'
import { getLeads } from './Lead'

export default {
  tasks: () => getTasks(),
  task: (_, { id }) => {
    console.log(id)
    return findTask(id)
  },
  users: () => getUsers(),
  leads: () => getLeads(),
}
