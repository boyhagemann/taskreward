import { session, transformOne, transformMany, id, handleError } from './helpers'
import { unique } from 'shorthash'
import { findIncentivesByAction } from './Incentive'

export const createAction = (_, { input }) => session
  .run(`
    MATCH (b:Profile { id: $profile })
    CREATE (a:Action $props)
    CREATE (b)-[r:HAS_ACTION]->(a)
    RETURN a
  `,
    {
      profile: input.profile,
      props: { id: id(), ...input }
    }
  )
  .then(result => transformOne(result, session))
  .catch(handleError)

  export const createActionWithoutProfile = (_, { input }) => session
    .run(`
      CREATE (a:Action $props)
      RETURN a
    `,
      {
        props: { id: id(), ...input }
      }
    )
    .then(result => transformOne(result, session))
    .catch(handleError)

export const updateAction = (_, { input }) => session
  .run(`
    MATCH (a:Action { id: $id })
    SET a = $props
    RETURN a
  `,
    { id: input.id, props: input }
  )
  .then(result => transformOne(result, session))
  .catch(handleError)

export const findActionsByProfile = id => session
  .run(`
    MATCH (a:Action)<-[:HAS_ACTION]-(:Profile { id: $id })
    RETURN a
    UNION
    MATCH (a:Action)
    WHERE NOT (a)<-[:HAS_ACTION]-(:Profile)
    RETURN a
  `, { id })
  .then(result => transformMany(result, session))
  .catch(handleError)

export default {
  incentives: action => findIncentivesByAction(action.id),
}
