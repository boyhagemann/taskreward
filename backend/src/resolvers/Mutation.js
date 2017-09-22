import { requestToken } from './Token'
import { createUser, updateUser } from './User'
import { createIncentive, updateIncentive } from './Incentive'
import { createAction, assignAction } from './Action'
import { createLead, redirect } from './Lead'
import { createProfile, updateProfile } from './Profile'
import { createPayment } from './Payment'

export default {
  requestToken,
  redirect: (_, { hash, session }, { user }) => redirect(hash, session, user),
  createUser: (_, { input }) => createUser(input),
  createIncentive: (_, { input }) => createIncentive(input),
  updateIncentive:  (_, { input }) => updateIncentive(input),
  createAction: (_, { input }) => createAction(input),
  assignAction: (_, { input }, { user }) => assignAction(input, { user }),
  createLead: (_, { input }) => createLead(input),
  createProfile: (_, { input }) => createProfile(input),
  createPayment: (_, { input }) => createPayment(input),
  updateUser: (_, { input }, { user }) => updateUser(input, user),
  updateProfile: (_, { input }) => updateProfile(input),
}
