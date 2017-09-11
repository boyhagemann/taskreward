import { requestToken } from './Token'
import { createUser } from './User'
import { createIncentive, updateIncentive } from './Incentive'
import { assignIncentive } from './Event'
import { createLead, redirect } from './Lead'
import { updateProfile } from './Profile'

export default {
  requestToken,
  redirect: (_, { hash, session }, { user }) => redirect(hash, session, user),
  createUser,
  createIncentive, updateIncentive,
  assignIncentive,
  createLead,
  updateProfile,
}
