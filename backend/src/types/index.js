import RootQuery from './RootQuery'
import Mutation from './Mutation'
import Subscription from './Subscription'

const schema = `
scalar Date
scalar Second
scalar Email

schema {
  query: RootQuery
  mutation: Mutation
  subscription: Subscription
}
`

export default [schema, ...RootQuery, ...Mutation, ...Subscription]
