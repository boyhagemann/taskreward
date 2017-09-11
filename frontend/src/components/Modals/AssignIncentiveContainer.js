import { compose } from 'redux'
import { gql, graphql } from 'react-apollo'
import { connect } from 'react-redux'
import AssignIncentive from './AssignIncentive'
import AssignIncentiveMutation from '../../mutations/AssignIncentive'

const incentiveQuery = gql`
query AssignIncentiveMutation($id: ID!) {
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
      incentives {
        id
        action
      }
    }
  }
}
`

const WithQuery = graphql(incentiveQuery, {
  options: ({ properties: { id } = {} }) => ({
    variables: { id }
  }),
  props: ({ data: { loading, viewer = {} } }) => ({
    loading,
    profile: viewer.profile
  })
})

export default compose(
  AssignIncentiveMutation,
  WithQuery,
)(AssignIncentive)
