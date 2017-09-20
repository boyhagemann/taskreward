import { gql, graphql } from 'react-apollo'
import { compose } from 'redux'
import Leads from './Leads'

const WithQuery = graphql(gql`
  query Leads {
    viewer {
      id
      leads {
        id
        hash
        profile {
          id
          name
          description
        }
      }
    }
  }
`, {
  props: ({ data: { loading, viewer = {} } }) => ({
    loading, leads: viewer.leads
  })
})

export default compose(
  WithQuery
)(Leads)
