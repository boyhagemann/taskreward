import RootQuery from './RootQuery'
import Mutation from './Mutation'

const schema = `
schema {
  query: RootQuery
  mutation: Mutation
}
`

export default [schema, ...RootQuery, ...Mutation]
