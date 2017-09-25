import { compose } from 'redux'
import { gql, graphql } from 'react-apollo'

const WithQuery = graphql(gql`
  query NavbarContainer {
    viewer {
      id
      name
      profile {
        id
      }
    }
  }
`)

export default compose(
  WithQuery
)
