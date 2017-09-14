import { session, id, handleError } from '../resolvers/helpers'
import { createUser } from '../resolvers/User'
import { createProfile } from '../resolvers/Profile'
import { createAction, createActionWithoutProfile } from '../resolvers/Action'
import { createIncentive } from '../resolvers/Incentive'
import { createReward } from '../resolvers/Reward'
import { createMilestone } from '../resolvers/Milestone'
import { createRootLead, createLead } from '../resolvers/Lead'
import { createEvent } from '../resolvers/Event'
import users from './users'
import profiles from './profiles'
import actions from './actions'
import incentives from './incentives'
import milestones from './milestones'
import leads from './leads'
import rewards from './rewards'
import events from './events'

console.log('Truncating first...')
session
  .run(`
  MATCH (n)
  DETACH DELETE n
  `)
  .then(result => console.log('Data truncated!'))
  .then()
  .catch(handleError)

users.forEach(user => {
  console.log('Seeding user', user)
  createUser(null, { input: user })
})

profiles.forEach(profile => {
  console.log('Seeding profile', profile)
  createProfile(null, { input: profile })
})

actions.forEach(action => {
  console.log('Seeding action', action)
  action.profile
    ? createAction(null, { input: action })
    : createActionWithoutProfile(null, { input: action })
})

incentives.forEach(incentive => {
  console.log('Seeding incentive', incentive)
  createIncentive(null, { input: incentive })
})

milestones.forEach(milestone => {
  console.log('Seeding milestone', milestone)
  createMilestone(null, { input: milestone })
})

leads.forEach(lead => {
  console.log('Seeding lead', lead)
  createLead(null, { input: lead })
})

rewards.forEach(reward => {
  console.log('Seeding reward', reward)
  createReward(null, { input: reward })
})

events.forEach(event => {
  console.log('Seeding event', event)
  createEvent(null, { input: event }, { user: users.find( user => user.id === event.createdBy )})
})

console.log('Done!')
