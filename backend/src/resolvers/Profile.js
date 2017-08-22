import { session, transformOne, transformMany, id, handleError } from './helpers'
import { getUser } from './User'
import { findRewardsByProfile } from './Reward'
import { findLeadsForProfile } from './Lead'
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
        hash: unique(id()),
        user: input.user,
        status: 'some-status'
      }
    }
  )
  .then(result => transformOne(result, session))
  .catch(handleError)

export const getRewards = () => session
  .run(`
    MATCH (a:Profile)
    RETURN a
  `)
  .then(result => transformMany(result, session))
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

export default {
  user: (profile) => getUser(profile.user),
  rewards: (profile) => findRewardsByProfile(profile.id),
  leads: (profile) => findLeadsForProfile(profile.id),
}
