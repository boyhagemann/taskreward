import {  gql, graphql } from 'react-apollo'
import Item from './Item'

export default graphql(gql`
  query Item {
    tasks {
      id
    }
  }
`, {
  options: props => ({
    variables: {
      id: 1
    }
  })
})(Item)
