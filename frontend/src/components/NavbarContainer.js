import { gql, graphql } from 'react-apollo'

export default graphql(gql`
  query NavbarContainer {
    viewer {
      id
      name
    }
  }
`)
