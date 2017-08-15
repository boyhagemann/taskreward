import {  gql, graphql } from 'react-apollo'
import Lead from './Lead'

export default graphql(gql`
  query Lead($id: ID!) {
    lead(id: $id) {
      id
      task {
        id
        name
        description
        link
        reward
      }
      user {
        name
      }
      parent {
        user {
          name
        }
      }
    }
  }
`, {
  options: props => ({
    variables: props.match.params
  })
})(Lead)
