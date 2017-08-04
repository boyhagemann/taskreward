import { session, transformOne, transformMany, id, handleError } from './helpers'
import { findUser } from './User'
import { findLeadsForTask } from './Lead'

export const createTask = (_, { input }) => session
  .run(`
    MATCH (b:User { id: $owner })
    CREATE (a:Task $props)
    CREATE (b)-[r:HAS_TASK]->(a)
    RETURN a
  `,
    { owner: input.owner, props: { id: id(), ...input } }
  )
  .then(result => transformOne(result, session))
  .catch(handleError)

export const getTasks = () => session
  .run(`
    MATCH (n1:Task)
    RETURN n1
  `)
  .then(result => transformMany(result, session))
  .catch(handleError)

export const findTask = id => session
  .run(`
    MATCH (n1:Task { id: $id })
    RETURN n1 LIMIT 1
  `, { id })
  .then(result => transformOne(result, session))
  .catch(handleError)

export const findTasksByUser = id => session
  .run(`
    MATCH (a:Task)<-[r:HAS_TASK]-(b:User { id: $id })
    RETURN a
  `, { id })
  .then(result => transformMany(result, session))
  .catch(handleError)

export default {
  owner: (task) => findUser(task.owner),
  leads: (task) => findLeadsForTask(task.id),
}
