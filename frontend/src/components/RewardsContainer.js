import { gql, graphql } from 'react-apollo'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Rewards from './Rewards'
import WithCreatePaymentMutation from '../mutations/CreatePayment'

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
    viewer,
    rewards: viewer.rewards,
    total: viewer.rewards && getTotalRewardValue(viewer.rewards),
    canRequestPayment: viewer.rewards && getTotalRewardValue(viewer.rewards) >= PAYMENT_TRESHOLD,
    currency: 'EUR',
  })
})

const mapDispatchToProps = dispatch => ({
  redirect: (id) => dispatch(push(`/my/payments/${id}`))
})

const WithRedux = connect(null, mapDispatchToProps)

export default compose(
  WithQuery,
  WithRedux,
  WithCreatePaymentMutation,
)(Rewards)
