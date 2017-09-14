import { session, transformOne, transformMany, id, handleError } from './helpers'
import { getUser } from './User'
import { findActionsByProfile } from './Action'
import { findIncentivesByProfile } from './Incentive'
import { findMilestonesByProfile } from './Milestone'
import { findLeadsForProfile, getLead } from './Lead'
import { unique } from 'shorthash'

export const createProfile = (_, { input }) => session
  .run(`
    MATCH (b:User { id: $user })
    CREATE (a:Profile $props)
    CREATE (b)-[r:HAS_PROFILE]->(a)
    CREATE (c:Lead $lead)
    CREATE (a)-[:HAS_LEAD]->(c)
    CREATE (b)-[:HAS_LEAD]->(c)
    RETURN a
  `,
    {
      user: input.user,
      props: { id: id(), ...input },
      lead: {
        id: input.id || id(),
        hash: input.hash || unique(id()),
        user: input.user,
        status: 'some-status'
      }
    }
  )
  .then(result => transformOne(result, session))
  .catch(handleError)

export const updateProfile = (_, { input }) => session
  .run(`
    MATCH (a:Profile { id: $id })
    SET a = $props
    RETURN a
  `,
    { id: input.id, props: input }
  )
  .then(result => transformOne(result, session))
  .catch(handleError)

export const getProfile = id => session
  .run(`
    MATCH (a:Profile { id: $id })
    RETURN a LIMIT 1
  `, { id })
  .then(result => transformOne(result, session))
  .catch(handleError)

export const getProfileByUser = user => session
  .run(`
    MATCH (a:Profile)<-[:HAS_PROFILE]-(b:User { id: $user })
    RETURN a LIMIT 1
  `, { user })
  .then(result => transformOne(result, session))
  .catch(handleError)

export const getProfileByLead = lead => session
  .run(`
    MATCH (a:Profile)-[:HAS_LEAD*]->(b:Lead { id: $lead })
    RETURN a LIMIT 1
  `, { lead })
  .then(result => transformOne(result, session))
  .catch(handleError)

export default {
  user: (profile) => getUser(profile.user),
  actions: (profile) => findActionsByProfile(profile.id),
  incentives: (profile) => findIncentivesByProfile(profile.id),
  milestones: (profile) => findMilestonesByProfile(profile.id),
  leads: (profile) => findLeadsForProfile(profile.id),
  lead: (_, { id }) => getLead(id),
}
