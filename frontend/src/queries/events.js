import { gql } from 'react-apollo'

export default gql`
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
}`
