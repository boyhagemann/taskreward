import { session, transformOne, transformMany, id, handleError } from './helpers'
import { findUser } from './User'
import { findTask } from './Task'

const leads = [
  { id: "1", from: "1", to: "2", task: 'tatata',
    description: 'This is something for you', status: 'some-status',
   },
  { id: "2", from: "1", to: "2", task: 'tatata',
    description: 'Some other message', status: 'some-status',
  },
]

export const createLead = (_, { input }) => session
  .run(`
    MATCH (b:Task { id: $task })
    CREATE (a:Lead $props)
    CREATE (b)-[r:HAS_LEAD]->(a)
    RETURN a
  `,
    { task: input.task, props: { id: id(), ...input } }
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
    RETURN a LIMIT 1
  `, { id })
  .then(result => transformMany(result, session))
  .catch(handleError)

export const findLeadsFrom = id => leads.find(lead => lead.from === id)
export const findLeadsTo = id => leads.find(lead => lead.to === id)

export default {
  from: (lead) => findUser(lead.from),
  to: (lead) => findUser(lead.to),
  task: (lead) => findTask(lead.task),
}
