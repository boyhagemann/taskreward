import { gql, graphql } from 'react-apollo'
import Navbar from './Navbar'

export default graphql(gql`
  query Profile {
    viewer {
      account {
        name
      }
    }
  }
`)( ({ data }) => Navbar(data))
