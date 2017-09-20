import { gql, graphql } from 'react-apollo'
import { compose } from 'redux'
import Payments from './Payments'

const WithQuery = graphql(gql`
  query Payments {
    viewer {
      id
      payments {
        id
        createdAt
        value
        currency
      }
    }
  }
`, {
  props: ({ data: { loading, viewer = {} } }) => ({
    loading,
    payments: viewer.payments,
  })
})

export default compose(
  WithQuery,
)(Payments)
