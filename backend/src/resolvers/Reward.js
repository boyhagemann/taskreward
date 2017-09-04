import { session, transformOne, transformMany, id, handleError } from './helpers'
import { getUser } from './User'
import { findLeadByReward, findLeadsForReward } from './Lead'
import { unique } from 'shorthash'

export const createReward = (_, { input }) => session
  .run(`
    MATCH (b:Profile { id: $profile })
    CREATE (a:Reward $props)
    CREATE (b)-[r:HAS_REWARD]->(a)
    RETURN a
  `,
    {
      profile: input.profile,
      props: { id: id(), ...input }
    }
  )
  .then(result => transformOne(result, session))
  .catch(handleError)

export const updateReward = (_, { input }) => session
  .run(`
    MATCH (a:Reward { id: $id })
    SET a = $props
    RETURN a
  `,
    { id: input.id, props: input }
  )
  .then(result => transformOne(result, session))
  .catch(handleError)

export const getRewards = () => session
  .run(`
    MATCH (a:Reward)
    RETURN a
  `)
  .then(result => transformMany(result, session))
  .catch(handleError)

export const getReward = id => session
  .run(`
    MATCH (a:Reward { id: $id })
    RETURN a LIMIT 1
  `, { id })
  .then(result => transformOne(result, session))
  .catch(handleError)

export const getRewardByMilestone = id => session
  .run(`
    MATCH (a:Reward)<-[:HAS_REWARD]->(:Milestone { id: $id })
    RETURN a LIMIT 1
  `, { id })
  .then(result => transformOne(result, session))
  .catch(handleError)

export const findRewardsByProfile = id => session
  .run(`
    MATCH (a:Reward)<-[r:HAS_REWARD]-(b:Profile { id: $id })
    RETURN a
  `, { id })
  .then(result => transformMany(result, session))
  .catch(handleError)

export default {
  // profile: (reward) => getProfile(reward.profile),
}
