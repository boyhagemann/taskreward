import { session, transformOne, transformMany, id, handleError } from './helpers'
import { getUser } from './User'
import { findLeadByReward, findLeadsForReward } from './Lead'
import { getRewardByMilestone } from './Reward'
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
  .then(milestone => input.reward && linkMilestoneToReward(milestone.id, input.reward))
  .catch(handleError)

export const linkMilestoneToReward = (milestone, reward) => session
  .run(`
    MATCH (a:Milestone { id: $milestone })
    MATCH (b:Reward { id: $reward })
    CREATE (a)-[r:HAS_REWARD { id: $id}]->(b)
    RETURN r
  `, { milestone, reward, id: id() }
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

export const getMilestones = () => session
  .run(`
    MATCH (a:Milestone)
    RETURN a
  `)
  .then(result => transformMany(result, session))
  .catch(handleError)

export const getMilestone = id => session
  .run(`
    MATCH (a:Milestone { id: $id })
    RETURN a LIMIT 1
  `, { id })
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
  reward: (milestone) => getRewardByMilestone(milestone.id),
}
