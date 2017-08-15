import { requestToken } from './Token'
import { createUser } from './User'
import { createTask } from './Task'
import { createLead, redirect } from './Lead'

export default {
  requestToken,
  redirect: (_, { hash, session }, { user }) => redirect(hash, session, user),
  createUser,
  createTask,
  createLead,
}
