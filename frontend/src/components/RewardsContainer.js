import { gql, graphql } from 'react-apollo'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Rewards from './Rewards'

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
          action
        }
      }
    }
  }
`, {
  props: ({ data: { loading, viewer = {} } }) => ({
    loading, rewards: viewer.rewards
  })
})

export default compose(
  WithQuery
)(Rewards)
