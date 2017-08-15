import { session, transformOne, transformMany, id, handleError } from './helpers'
import { getUser } from './User'
import { getTask } from './Task'

export const createRootLead = (_, { input }) => session
  .run(`
    MATCH (b:Task { id: $task })
    MATCH (c:User { id: $user })
    CREATE (a:Lead $props)
    CREATE (b)-[:HAS_LEAD]->(a)
    CREATE (c)-[:HAS_LEAD]->(a)
    RETURN a
  `,
    {
      user: input.user,
      task: input.task,
      props: { id: id(), ...input }
    }
  )
  .then(result => transformOne(result, session))
  .catch(handleError)

export const createLead = (_, { input }) => session
  .run(`
    MATCH (b:Lead { id: $parent })
    MATCH (c:User { id: $user })
    CREATE (a:Lead $props)
    CREATE (b)-[:HAS_LEAD]->(a)
    CREATE (c)-[:HAS_LEAD]->(a)
    RETURN a
  `,
    {
      user: input.user,
      parent: input.parent,
      props: { id: id(), ...input }
    }
  )
  .then(result => transformOne(result, session))
  .catch(handleError)

export const getLeads = () => session
  .run(`
    MATCH (a:Lead)<-[r:HAS_LEAD]-(:Lead)
    RETURN a
  `)
  .then(result => transformMany(result, session))
  .catch(handleError)

export const findLeadsForTask = id => session
  .run(`
    MATCH (a:Lead)<-[r:HAS_LEAD*]-(:Task { id: $id })
    WITH a, max(size(r)) AS depth
    RETURN a, depth
  `, { id })
  .then(result => transformMany(result, session))
  .catch(handleError)

export const getLead = id => session
  .run(`
    MATCH (a:Lead { id: $id })
    MATCH (a)<-[HAS_LEAD*]-(b:Task)
    RETURN a, b.id AS task
  `, { id })
  .then(result => transformOne(result, session))
  .catch(handleError)

export const getParent = id => session
  .run(`
    MATCH (:Lead { id: $id })<-[:HAS_LEAD]-(a:Lead)
    MATCH (a)<-[HAS_LEAD*]-(b:Task)
    RETURN a, b.id AS task
  `, { id })
  .then(result => transformOne(result, session))
  .catch(handleError)

export default {
  task: (lead) => getTask(lead.task),
  user: (lead) => getUser(lead.user),
  parent: (lead) => getParent(lead.id),
}
