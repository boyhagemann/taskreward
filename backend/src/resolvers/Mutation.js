import { requestToken } from './Token'
import { createUser } from './User'
import { createReward, updateReward } from './Reward'
import { assignReward } from './Event'
import { createLead, redirect } from './Lead'
import { updateProfile } from './Profile'

export default {
  requestToken,
  redirect: (_, { hash, session }, { user }) => redirect(hash, session, user),
  createUser,
  createReward, updateReward,
  assignReward,
  createLead,
  updateProfile,
}
