import { gql, graphql } from 'react-apollo'
import { compose } from 'redux'
import Preferences from './Preferences'

const WithQuery = graphql(gql`
  query Preferences {
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
)(Preferences)
