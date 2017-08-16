import { gql, graphql } from 'react-apollo'
import Profile from './Profile'

export default graphql(gql`
  query Profile {
    viewer {
      name
    }
  }
`)( ({ data }) => Profile(data))
