import { compose } from 'redux'
import { gql, graphql } from 'react-apollo'
import AssignAction from './AssignAction'
import WithMutation from '../../mutations/AssignAction'

const actionQuery = gql`
query AssignActionContainer($id: ID!) {
  viewer {
    id
    profile {
      id
      lead(id: $id) {
        id
        user {
          id
          name
        }
      }
      actions {
        id
        name
      }
    }
  }
}
`

const WithQuery = graphql(actionQuery, {
  options: ({ properties: { id } = {} }) => ({
    variables: { id }
  }),
  props: ({ data: { loading, viewer = {} } }) => ({
    loading,
    profile: viewer.profile
  })
})

export default compose(
  WithMutation,
  WithQuery,
)(AssignAction)
