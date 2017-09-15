export default `
  __typename
  ... on ViewedProfile {
    id
    createdAt
    action {
      id
      name
    }
    lead {
      id
      profile {
        id
        name
      }
      user {
        id
        name
      }
    }
  }
  ... on PerformedAction {
    id
    createdAt
    action {
      id
      name
    }
    lead {
      id
      profile {
        id
        name
      }
      user {
        id
        name
      }
    }
  }
  ... on ReceivedReward {
    id
    createdAt
    reward {
      id
      value
    }
    incentive {
      id
      value
      action {
        id
        name
      }
    }
    lead {
      id
      profile {
        id
        name
      }
      user {
        id
        name
      }
    }
  }
  `
