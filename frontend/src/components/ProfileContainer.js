import { gql, graphql } from 'react-apollo'
import Profile from './Profile'

export default graphql(gql`
  query Profile {
    viewer {
      profile {
        name
        description
      }
      rewards {
        name
        description
        value
      }
    }
  }
`)(Profile)
