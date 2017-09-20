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
    reward {
      id
      value
      actor {
        id
        user {
          id
          name
        }
      }
    }
  }
  `
