import { gql, graphql } from 'react-apollo'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import Page from './Page'

const WithForm = reduxForm({
  form: 'page',
})(Page)

const WithGraphQl = graphql(gql`
  query Profile {
    viewer {
      profile {
        name
        description
        rewards {
          name
          description
          value
        }
      }
    }
  }
`, {
  props: ({ data: { loading, viewer = {} }, ownProps }) => ({
    loading,
    profile: viewer.profile,
    initialValues: viewer.profile,
    action: ownProps.match.params.action,
  })
})(WithForm)

export default connect( state => ({
  size: state.size,
}))(WithGraphQl)
