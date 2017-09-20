import { session, transformOne, transformMany, uuid, handleError } from './helpers'
import { unique } from 'shorthash'
import { getActionByIncentive } from './Action'
import { getProfileByIncentive } from './Profile'

export const createIncentive = ({ id, profile, action, name, description, value }) => session
  .run(`
    MATCH (b:Action { id: $action })
    MATCH (c:Profile { id: $profile })
    CREATE (a:Incentive $props)
    CREATE (b)-[:HAS_INCENTIVE]->(a)
    CREATE (c)-[:HAS_INCENTIVE]->(a)
    RETURN a
  `,
    {
      action,
      profile,
      props: {
        id: id || uuid(),
        name,
        description,
        value,
      }
    }
  )
  .then(result => transformOne(result, session))
  .catch(handleError)

export const updateIncentive = ({ id, name, description, value }) => session
  .run(`
    MATCH (a:Incentive { id: $id })
    SET a = $props
    RETURN a
  `,
    { id, props: { name, description, value} }
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

export const findIncentivesByAction = id => session
  .run(`
    MATCH (a:Incentive)<-[r:HAS_INCENTIVE]-(:Action { id: $id })
    RETURN a
  `, { id })
  .then(result => transformMany(result, session))
  .catch(handleError)

export const findIncentivesByProfile = id => session
  .run(`
    MATCH (a:Incentive)<-[:HAS_INCENTIVE]-(b:Profile { id: $id })
    RETURN a
  `, { id })
  .then(result => transformMany(result, session))
  .catch(handleError)

export default {
  action: incentive => getActionByIncentive(incentive.id),
  profile: incentive => getProfileByIncentive(incentive.id),
}
