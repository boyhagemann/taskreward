import { gql, graphql } from 'react-apollo'
import Rewards from './Rewards'

export default graphql(gql`
  query Rewards {
    rewards {
      id
      name
      description
      value
      lead {
        hash
      }
    }
  }
`)(Rewards)
