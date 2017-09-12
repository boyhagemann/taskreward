import { session, transformOne, transformMany, id, handleError } from './helpers'
import { unique } from 'shorthash'

export const createIncentive = (_, { input }) => session
  .run(`
    MATCH (b:Profile { id: $profile })
    CREATE (a:Incentive $props)
    CREATE (b)-[r:HAS_INCENTIVE]->(a)
    RETURN a
  `,
    {
      profile: input.profile,
      props: { id: id(), ...input }
    }
  )
  .then(result => transformOne(result, session))
  .catch(handleError)

export const updateIncentive = (_, { input }) => session
  .run(`
    MATCH (a:Incentive { id: $id })
    SET a = $props
    RETURN a
  `,
    { id: input.id, props: input }
  )
  .then(result => transformOne(result, session))
  .catch(handleError)

export const getIncentiveByEvent = id => session
  .run(`
    MATCH (a:Incentive)--(:Event { id: $id })
    RETURN a LIMIT 1
  `, { id })
  .then(result => transformOne(result, session))

export const getIncentiveByReward = id => session
  .run(`
    MATCH (a:Incentive)-[:HAS_REWARD]->(:Reward { id: $id })
    RETURN a LIMIT 1
  `, { id })
  .then(result => transformOne(result, session))

// export const getIncentiveByMilestone = id => session
//   .run(`
//     MATCH (a:Incentive)<-[:HAS_INCENTIVE]->(:Milestone { id: $id })
//     RETURN a LIMIT 1
//   `, { id })
//   .then(result => transformOne(result, session))
//   .catch(handleError)

export const findIncentivesByProfile = id => session
  .run(`
    MATCH (a:Incentive)<-[r:HAS_INCENTIVE]-(b:Profile { id: $id })
    RETURN a
  `, { id })
  .then(result => transformMany(result, session))
  .catch(handleError)

export default {
}
