import { gql } from 'react-apollo'
import eventsFragment from './eventsFragment'

export default gql`
query LeadContainer($id: ID!) {
  viewer {
    id
    profile {
      id
      name
      rewards {
        id
        name
      }
      lead(id: $id) {
        id
        user {
          id
          name
          email
        }
        parent {
          id
          user {
            id
            name
          }
        }
        events {
          ${eventsFragment}
        }
      }
    }
  }
}
`
