import { gql, graphql } from 'react-apollo'
import { compose } from 'redux'
import Account from './Account'

const WithQuery = graphql(gql`
  query Account {
    viewer {
      id
    }
  }
`, {
  props: ({ data: { loading, viewer = {} } }) => ({
    loading,
    viewer,
  })
})

export default compose(
  WithQuery,
)(Account)
