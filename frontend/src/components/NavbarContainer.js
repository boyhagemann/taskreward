import { gql, graphql } from 'react-apollo'
import Navbar from './Navbar'

export default graphql(gql`
  query NavbarContainer {
    viewer {
      id
      name
    }
  }
`)( ({ data }) => Navbar(data))
