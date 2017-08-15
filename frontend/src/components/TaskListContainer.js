import {  gql, graphql } from 'react-apollo'
import TaskList from './TaskList'

export default graphql(gql`
  query TaskList {
    tasks {
      id
      name
      description
      reward
    }
  }
`)(TaskList)
