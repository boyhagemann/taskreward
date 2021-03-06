import { gql, graphql } from 'react-apollo'
import { connect } from 'react-redux'
import { open } from '../redux/modal'
import Page from './Page'
import WithWindowSize from './WithWindowSize'

const WithGraphQl = graphql(gql`
  query PreviewContainer {
    viewer {
      id
      profile {
        id
        name
        description
        incentives {
          id
          name
          description
          value
        }
      }
    }
  }
`, {
  props: ({ data: { loading, viewer = {} } }) => ({
    loading,
    profile: viewer.profile,
  })
})(Page)

const mapDispatchToProps = dispatch => ({
  openReferModal: () => dispatch(open('refer'))
})

const WithRedux = connect(null, mapDispatchToProps)(WithGraphQl)

export default WithWindowSize(WithRedux)
