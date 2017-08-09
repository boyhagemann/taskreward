import {  gql, graphql } from 'react-apollo'
import Item from './Item'

export default graphql(gql`
  query Item($id: ID!) {
    task(id: $id) {
      id
      name
      description
      link
    }
  }
`, {
  options: props => ({
    variables: props.match.params
  })
})(Item)
