import { gql, graphql } from 'react-apollo'
import Home from './Home'

export default graphql(gql`
  query RewardList {
    viewer {
      name
    }
  }
`)(Home)
