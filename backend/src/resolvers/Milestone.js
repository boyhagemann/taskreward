import { session, transformOne, transformMany, id, handleError } from './helpers'
import { getUser } from './User'
import { findLeadByIncentive, findLeadsForIncentive } from './Lead'
import { getIncentiveByMilestone } from './Incentive'
import { unique } from 'shorthash'

export const createMilestone = (_, { input }) => session
  .run(`
    MATCH (b:Profile { id: $profile })
    CREATE (a:Milestone $props)
    CREATE (b)-[r:HAS_MILESTONE]->(a)
    RETURN a
  `,
    {
      profile: input.profile,
      props: { id: id(), ...input }
    }
  )
  .then(result => transformOne(result, session))
  .then(milestone => input.incentive && linkMilestoneToIncentive(milestone.id, input.incentive))
  .catch(handleError)

export const linkMilestoneToIncentive = (milestone, incentive) => session
  .run(`
    MATCH (a:Milestone { id: $milestone })
    MATCH (b:Incentive { id: $incentive })
    CREATE (a)-[r:HAS_INCENTIVE { id: $id}]->(b)
    RETURN r
  `, { milestone, incentive, id: id() }
  )
  .then(result => transformOne(result, session))
  .catch(handleError)

export const updateMilestone = (_, { input }) => session
  .run(`
    MATCH (a:Milestone { id: $id })
    SET a = $props
    RETURN a
  `,
    { id: input.id, props: input }
  )
  .then(result => transformOne(result, session))
  .catch(handleError)

export const findMilestonesByProfile = id => session
  .run(`
    MATCH (a:Milestone)<-[r:HAS_MILESTONE]-(b:Profile { id: $id })
    RETURN a
  `, { id })
  .then(result => transformMany(result, session))
  .catch(handleError)

export default {
  incentive: (milestone) => getIncentiveByMilestone(milestone.id),
}
