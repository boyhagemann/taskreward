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
  ... on AssignedIncentive {
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
    incentive {
      id
      name
      action
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
    incentive {
      id
      name
      action
    }
  }
  `
