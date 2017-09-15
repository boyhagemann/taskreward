import { session, transformOne, transformMany, uuid, handleError } from './helpers'
import { unique } from 'shorthash'
import moment from 'moment'
import { findParents } from './Lead'
import { findIncentivesByAction } from './Incentive'
import { createReward } from './Reward'
import { createEvent } from './Event'

export const createAction = ({ id, profile, name }) => {

  const query = [`
    CREATE (a:Action $props)
  `]

  if(profile) {
    query.push(`
      WITH a
      MATCH (b:Profile { id: $profile })
      CREATE (b)-[r:HAS_ACTION]->(a)
    `)
  }

  query.push(`
    RETURN a
  `)

  return session
  .run(query.join(''),
    {
      profile,
      props: { id: id || uuid(), name }
    }
  )
  .then(result => transformOne(result, session))
  .catch(handleError)
}

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

export const findActionsByProfile = (id, withGlobal) => {

  const query = [`
    MATCH (a:Action)<-[:HAS_ACTION]-(:Profile { id: $id })
    RETURN a
  `]

  if(withGlobal) {
    query.push(`
      UNION
      MATCH (a:Action)
      WHERE NOT (a)<-[:HAS_ACTION]-(:Profile)
      RETURN a
    `)
  }

  return session
  .run(query.join(''), { id })
  .then(result => transformMany(result, session))
  .catch(handleError)
}

export const getActionByIncentive = id => session
  .run(`
    MATCH (a:Action)-[:HAS_INCENTIVE]->(:Incentive { id: $id })
    RETURN a
  `, { id })
  .then(result => transformOne(result, session))
  .catch(handleError)

export const getActionByEvent = id => session
  .run(`
    MATCH (a:Action)-[:HAS_EVENT]->(:Event { id: $id })
    RETURN a
  `, { id })
  .then(result => transformOne(result, session))
  .catch(handleError)


export const assignAction = ({ lead, action }) => {

  console.log('assignAction', lead, action)
  return session
  .run(`
    MATCH (a:Lead { id: $lead })
    MATCH (b:Action { id: $action })
    CREATE (a)-[:PERFORMED_ACTION { createdAt: $createdAt }]->(b)
    RETURN b
  `,
    {
      lead,
      action,
      createdAt: moment().format(),
    }
  )
  .then(result => transformOne(result, session))
  .then( () => createEvent({
    type: 'PERFORMED_ACTION',
    lead,
    action,
  }))
  .then(async event => {

    const incentives = await findIncentivesByAction(action) // @todo must have a value and must be within date range
    const parents = await findParents(lead)

    console.log('lead', lead, action)
    console.log('incentives', incentives)
    console.log('parents', parents)

    incentives.forEach( incentive => {
      parents.forEach( parent => {
        createReward({
          root: lead,
          lead: parent.id,
          incentive: incentive.id,
          value: incentive.value,
          depth: parent.depth
        })
      })
    })


  })
  .catch(handleError)
}

export default {
  incentives: action => findIncentivesByAction(action.id),
}
