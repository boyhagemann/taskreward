import { session, id, handleError } from '../resolvers/helpers'
import { createUser } from '../resolvers/User'
import { createTask } from '../resolvers/Task'
import { createRootLead, createLead } from '../resolvers/Lead'
import users from './users'
import tasks from './tasks'
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

tasks.forEach(task => {
  console.log('Seeding task', task)
  createTask(null, { input: task })
})

leads.forEach(lead => {
  console.log('Seeding lead', lead)
  createLead(null, { input: lead })
})

console.log('Done!')
