import { session, transformOne, transformMany, id, handleError } from './helpers'
import { findUser } from './User'
import { getTask } from './Task'

export const createLead = (_, { input }) => session
  .run(`
    MATCH (b:Task { id: $task })
    MATCH (c:User { id: $from })
    MATCH (d:User { id: $to })
    CREATE (a:Lead $props)
    CREATE (b)-[r1:HAS_LEAD]->(a)
    CREATE (c)-[r2:SENDS_LEAD]->(a)
    CREATE (d)-[r3:RECEIVES_LEAD]->(a)
    RETURN a
  `,
    {
      from: input.from,
      to: input.to,
      task: input.task,
      props: { id: id(), ...input }
    }
  )
  .then(result => transformOne(result, session))
  .catch(handleError)

export const getLeads = () => session
  .run(`
    MATCH (n1:Lead)
    RETURN n1
  `)
  .then(result => transformMany(result, session))
  .catch(handleError)

export const findLeadsForTask = id => session
  .run(`
    MATCH (a:Lead)<-[r:HAS_LEAD]-(b:Task { id: $id })
    RETURN a
  `, { id })
  .then(result => transformMany(result, session))
  .catch(handleError)

export const getLead = id => session
  .run(`
    MATCH (a:Lead { id: $id })
    RETURN a
  `, { id })
  .then(result => transformOne(result, session))
  .catch(handleError)

export const findLeadsFrom = id => session
  .run(`
    MATCH (a:Lead)<-[r:SENDS_LEAD]-(b:User { id: $id })
    RETURN a
  `, { id })
  .then(result => transformMany(result, session))
  .catch(handleError)

export const findLeadsTo = id => session
  .run(`
    MATCH (a:Lead)<-[r:RECEIVES_LEAD]-(b:User { id: $id })
    RETURN a
  `, { id })
  .then(result => transformMany(result, session))
  .catch(handleError)

export default {
  from: (lead) => findUser(lead.from),
  to: (lead) => findUser(lead.to),
  task: (lead) => getTask(lead.task),
}
