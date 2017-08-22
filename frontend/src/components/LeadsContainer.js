import { gql, graphql } from 'react-apollo'
import Leads from './Leads'

export default graphql(gql`
  query Leads {
    viewer {
      leads {
        name
        description
      }
    }
  }
`)(Profile)
