import { requestToken } from './Token'
import { createUser } from './User'
import { createIncentive, updateIncentive } from './Incentive'
import { createAction, assignAction } from './Action'
import { createLead, redirect } from './Lead'
import { createProfile, updateProfile } from './Profile'

export default {
  requestToken,
  redirect: (_, { hash, session }, { user }) => redirect(hash, session, user),
  createUser: (_, { input }) => createUser(input),
  createIncentive: (_, { input }) => createIncentive(input),
  updateIncentive:  (_, { input }) => updateIncentive(input),
  createAction: (_, { input }) => createAction(input),
  assignAction: (_, { input }) => assignAction(input),
  createLead: (_, { input }) => createLead(input),
  createProfile: (_, { input }) => createProfile(input),
  updateProfile: (_, { input }) => updateProfile(input),
}
