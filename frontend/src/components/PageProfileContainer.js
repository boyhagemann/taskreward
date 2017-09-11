import { gql, graphql } from 'react-apollo'
import PageProfile from './PageProfile'

export default graphql(gql`
  query ProfileContainer {
    viewer {
      id
      profile {
        id
        name
        description
        incentives {
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
})(PageProfile)
