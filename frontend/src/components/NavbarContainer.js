import { compose } from 'redux'
import WithClickOutside from './WithClickOutside'
import { gql, graphql } from 'react-apollo'

const WithQuery = graphql(gql`
  query NavbarContainer {
    viewer {
      id
      name
    }
  }
`)

export default compose(
  WithQuery
)
