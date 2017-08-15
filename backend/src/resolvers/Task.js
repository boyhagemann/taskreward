import { session, transformOne, transformMany, id, handleError } from './helpers'
import { getUser } from './User'
import { findLeadByTask, findLeadsForTask } from './Lead'
import { unique } from 'shorthash'

export const createTask = (_, { input }) => session
  .run(`
    MATCH (b:User { id: $owner })
    CREATE (a:Task $props)
    CREATE (b)-[r:HAS_TASK]->(a)
    CREATE (c:Lead $lead)
    CREATE (a)-[:HAS_LEAD]->(c)
    CREATE (b)-[:HAS_LEAD]->(c)
    RETURN a
  `,
    {
      owner: input.owner,
      props: { id: id(), ...input },
      lead: {
        id: input.id || id(),
        hash: unique(id()),
        user: input.owner,
        status: 'some-status'
      }
    }
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

export const getTask = id => session
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
  owner: (task) => getUser(task.owner),
  lead: (task) => findLeadByTask(task.id),
  leads: (task) => findLeadsForTask(task.id),
}
