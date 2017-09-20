import { gql, graphql } from 'react-apollo'
import { compose } from 'redux'
import { connect } from 'react-redux'
import Payment from './Payment'

const WithQuery = graphql(gql`
  query Payment($id: ID!) {
    viewer {
      id
      payment(id: $id) {
        id
        createdAt
        value
        currency
        rewards {
          id
          createdAt
          value
          actor {
            id
            user {
              name
            }
          }
          lead {
            id
            hash
          }
          incentive {
            id
            name
            action {
              id
              name
            }
          }
        }
      }
    }
  }
`, {
  props: ({ data: { loading, viewer = {} } }) => ({
    loading,
    viewer,
    payment: viewer.payment,
  })
})

const mapStateToProps = (state, props) => ({
  id: props.match.params.id,
})

const WithRedux = connect(mapStateToProps)

export default compose(
  WithRedux,
  WithQuery,
)(Payment)
