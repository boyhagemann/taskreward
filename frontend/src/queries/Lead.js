import { gql } from 'react-apollo'

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
        events {
          __typename
          ... on CreatedLead {
            id
            createdAt
            user {
              id
              name
            }
          }
          ... on AssignedReward {
            id
            createdAt
            value
            user {
              id
              name
            }
            lead {
              id
              user {
                id
                name
              }
            }
            reward {
              id
              name
            }
          }
        }
      }
    }
  }
}
`
