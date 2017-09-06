import { compose } from 'redux'
import { gql, graphql } from 'react-apollo'
import { connect } from 'react-redux'
import Reward from './Reward'
import AssignReward from '../../mutations/AssignReward'

const rewardQuery = gql`
query RewardContainer($id: ID!) {
  viewer {
    id
    profile {
      id
      lead(id: $id) {
        id
        user {
          id
          name
        }
      }
      rewards {
        id
        name
      }
    }
  }
}
`

const WithQuery = graphql(rewardQuery, {
  options: ({ properties: { id } = {} }) => ({
    variables: { id }
  }),
  props: ({ data: { loading, viewer: { profile } } }) => ({
    loading,
    profile
  })
})

export default compose(
  AssignReward,
  WithQuery,
)(Reward)
