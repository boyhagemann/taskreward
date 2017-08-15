import { requestToken } from './Token'
import { createUser } from './User'
import { createTask } from './Task'
import { createLead, redirect } from './Lead'

export default {
  requestToken,
  redirect: (_, { task, parent, session }, { user }) => redirect(task, parent, session, user),
  createUser,
  createTask,
  createLead,
}
