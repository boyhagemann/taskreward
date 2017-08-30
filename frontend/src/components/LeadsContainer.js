import { gql, graphql } from 'react-apollo'
import Leads from './Leads'

export default graphql(gql`
  query Leads {
    viewer {
      id
      profile {
        id
        leads {
          id
          hash
          user {
            id
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
