import { session, transformOne, transformMany, id, handleError } from './helpers'

export const getEventsForLead = id => session
  .run(`
    MATCH ()-[r:CREATED_LEAD]->(:Lead { id: $id })
    RETURN r
  `, { id })
  .then(result => transformMany(result, session))
  .catch(handleError)

export default {

  // Resolve the Union type here...
  __resolveType(obj) {

    switch(obj.type) {

      case 'CREATED_LEAD':
        return 'CreatedLead'

      default:
        throw new Error(`The Event '${obj.type}' is not implemented yet`)
    }

  }
}
