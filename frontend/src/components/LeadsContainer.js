import { gql, graphql } from 'react-apollo'
import Leads from './Leads'

export default graphql(gql`
  query Leads {
    viewer {
      profile {
        leads {
          hash
          user {
            name
            email
          }
        }
      }
    }
  }
`, {
  props: ({ data: { loading, viewer = {} } }) => ({
    loading, leads: viewer.profile ? viewer.profile.leads : []
  })
})(Leads)
