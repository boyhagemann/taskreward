import { gql, graphql } from 'react-apollo'
import { compose } from 'redux'
import Home from './Home'
import WithWindowSize from './WithWindowSize'

const WithQuery = graphql(gql`
  query HomeContainer {
    viewer {
      id
      name
    }
  }
`)

export default compose(
  WithQuery,
  WithWindowSize
)(Home)
