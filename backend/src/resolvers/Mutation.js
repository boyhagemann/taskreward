import { requestToken } from './Token'
import { createUser } from './User'
import { createReward } from './Reward'
import { createLead, redirect } from './Lead'

export default {
  requestToken,
  redirect: (_, { hash, session }, { user }) => redirect(hash, session, user),
  createUser,
  createReward,
  createLead,
}
