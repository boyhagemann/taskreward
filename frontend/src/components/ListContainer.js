import {  gql, graphql } from 'react-apollo'
import List from './List'

export default graphql(gql`
  query List {
    tasks {
      id
      name
      description
      owner {
        id
        email
      }
      leads {
        from {
          email
        }
        to {
          email
        }
      }
    }
  }
`)(List)
