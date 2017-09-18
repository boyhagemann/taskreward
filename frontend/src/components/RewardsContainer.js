import { gql, graphql } from 'react-apollo'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Rewards from './Rewards'

const PAYMENT_TRESHOLD = 5
const getTotalRewardValue = rewards => rewards.reduce( (total, reward) => total + reward.value, 0)

const WithQuery = graphql(gql`
  query Leads {
    viewer {
      id
      rewards {
        id
        createdAt
        value
        incentive {
          id
          name
          action {
            name
          }
        }
      }
    }
  }
`, {
  props: ({ data: { loading, viewer = {} } }) => ({
    loading,
    rewards: viewer.rewards,
    total: viewer.rewards && getTotalRewardValue(viewer.rewards),
    canRequestPayment: viewer.rewards && getTotalRewardValue(viewer.rewards) >= PAYMENT_TRESHOLD
  })
})

export default compose(
  WithQuery
)(Rewards)
