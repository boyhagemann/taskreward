import User from './User'
import Lead from './Lead'

const RootQuery = `
type RootQuery {
  viewer: User
  lead(hash: String!): Lead
}
`

export default [RootQuery, ...User, ...Lead]
