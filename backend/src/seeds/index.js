import { session, id, handleError } from '../resolvers/helpers'
import { createUser } from '../resolvers/User'
import { createProfile } from '../resolvers/Profile'
import { createReward } from '../resolvers/Reward'
import { createRootLead, createLead } from '../resolvers/Lead'
import users from './users'
import profiles from './profiles'
import rewards from './rewards'
import leads from './leads'

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

rewards.forEach(reward => {
  console.log('Seeding reward', reward)
  createReward(null, { input: reward })
})

leads.forEach(lead => {
  console.log('Seeding lead', lead)
  createLead(null, { input: lead })
})

console.log('Done!')
