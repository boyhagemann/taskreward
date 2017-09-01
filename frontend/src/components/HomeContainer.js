import { gql, graphql } from 'react-apollo'
import Home from './Home'

export default graphql(gql`
  query HomeContainer {
    viewer {
      id
      name
    }
  }
`)(Home)
