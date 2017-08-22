import { gql, graphql } from 'react-apollo'
import Navbar from './Navbar'

export default graphql(gql`
  query Profile {
    viewer {
      name
    }
  }
`)( ({ data }) => Navbar(data))
