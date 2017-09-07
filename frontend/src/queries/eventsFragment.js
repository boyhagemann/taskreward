export default `
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
  ... on ReceivedReward {
    id
    createdAt
    depth
    cut
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
  `
