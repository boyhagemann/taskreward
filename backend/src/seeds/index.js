import { session, id, handleError } from '../resolvers/helpers'
import { createUser } from '../resolvers/User'
import { createProfile } from '../resolvers/Profile'
import { createAction } from '../resolvers/Action'
import { createIncentive } from '../resolvers/Incentive'
import { createReward } from '../resolvers/Reward'
import { createRootLead, createLead } from '../resolvers/Lead'
import users from './users'
import profiles from './profiles'
import actions from './actions'
import incentives from './incentives'
import leads from './leads'
import rewards from './rewards'

console.log('Truncating first...')
session
  .run(`
  MATCH (n)
  DETACH DELETE n
  `)
  .then(result => console.log('Data truncated!'))
  .catch(handleError)

users.forEach(async user => {
  console.log('Seeding user', user)
  console.log('Created user', await createUser(user))
})

profiles.forEach(async profile => {
  console.log('Seeding profile', profile)
  console.log('Created profile', await createProfile(profile))
})

actions.forEach(async action => {
  console.log('Seeding action', action)
  console.log('Created action', await createAction(action))
})

incentives.forEach(async incentive => {
  console.log('Seeding incentive', incentive)
  console.log('Created incentive', await createIncentive(incentive))

})

leads.forEach(async lead => {
  console.log('Seeding lead', lead)
  console.log('Created lead', await createLead(lead))
})

rewards.forEach(async reward => {
  console.log('Seeding reward', reward)
  console.log('Created reward', await createReward(reward))
})

console.log('Done!')
