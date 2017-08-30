import { gql, graphql } from 'react-apollo'
import Leads from './Leads'

export default graphql(gql`
  query Leads {
    viewer {
      profile {
        leads {
          id
          hash
          user {
            name
            email
            telephone
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
