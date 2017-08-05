import RootQuery from './RootQuery'
import Mutation from './Mutation'

const schema = `
scalar Date
scalar Second
scalar Email

schema {
  query: RootQuery
  mutation: Mutation
}
`

export default [schema, ...RootQuery, ...Mutation]
