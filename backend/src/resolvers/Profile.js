import { session, transformOne, transformMany, uuid, handleError } from './helpers'
import { getUser } from './User'
import { findActionsByProfile } from './Action'
import { findIncentivesByProfile } from './Incentive'
import { findLeadsForProfile, getLead, createLeadForProfile } from './Lead'
import { unique } from 'shorthash'

export const createProfile = ({ id, name, description, user, lead }) => session
  .run(`
    MATCH (a:User { id: $user })
    CREATE (b:Profile $props)
    CREATE (a)-[r:HAS_PROFILE]->(b)
    CREATE (c:Lead $lead)
    CREATE (a)-[:HAS_LEAD]->(c)
    CREATE (b)-[:HAS_LEAD]->(c)
    RETURN b
  `,
    {
      user,
      props: {
        id: id || uuid(),
        name,
        description,
      },
      lead: {
        id: lead || uuid(),
        hash: uuid(),
      }
    }
  )
  .then(result => transformOne(result, session))
  .catch(handleError)

export const updateProfile = ({ id, name, description }) => session
  .run(`
    MATCH (a:Profile { id: $id })
    SET a = $props
    RETURN a
  `,
    { id, props: { name, description } }
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

export const getProfileByUser = id => session
  .run(`
    MATCH (a:Profile)<-[:HAS_PROFILE]-(b:User { id: $id })
    RETURN a LIMIT 1
  `, { id })
  .then(result => transformOne(result, session))
  .catch(handleError)

export const getProfileByLead = id => session
  .run(`
    MATCH (a:Profile)-[:HAS_LEAD*]->(:Lead { id: $id })
    RETURN a LIMIT 1
  `, { id })
  .then(result => transformOne(result, session))
  .catch(handleError)

export const getProfileByIncentive = id => session
  .run(`
    MATCH (a:Profile)-[:HAS_INCENTIVE]->(:Incentive { id: $id })
    RETURN a LIMIT 1
  `, { id })
  .then(result => transformOne(result, session))
  .catch(handleError)

export default {
  user: (profile) => getUser(profile.user),
  actions: (profile, { withGlobal }) => findActionsByProfile(profile.id, withGlobal),
  incentives: (profile) => findIncentivesByProfile(profile.id),
  leads: (profile) => findLeadsForProfile(profile.id),
  lead: (_, { id }) => getLead(id),
}
