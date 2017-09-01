import { gql, graphql } from 'react-apollo'
import Profile from './Profile'

export default graphql(gql`
  query ProfileContainer {
    viewer {
      id
      profile {
        id
        name
        description
        rewards {
          id
          name
          description
          value
        }
      }
    }
  }
`, {
  props: ({ data: { loading, viewer = {} } }) => ({
    loading,
    profile: viewer.profile
  })
})(Profile)
