import { session, transformOne, transformMany, id, handleError } from './helpers'
import { findUser } from './User'
import { findLeadsForTask } from './Lead'

export const createTask = (_, { input }) => session
  .run(`
    CREATE (a:Task $props)
    RETURN a
  `,
    { props: { id: id(), ...input } }
  )
  .then(result => transformOne(result, session))
  .catch(handleError)

export const getTasks = () => session
  .run(`
    MATCH (n1:Task)
    RETURN n1 LIMIT 25
  `)
  .then(result => transformMany(result, session))
  .catch(handleError)

export const findTask = () => session
  .run(`
    MATCH (n1)
    RETURN n1 LIMIT 1
  `)
  .then(result => transformOne(result, session))
  .catch(handleError)

export default {
  owner: (task) => findUser(task.owner),
  leads: (task) => findLeadsForTask(task.id),
}
