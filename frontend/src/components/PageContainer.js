import { gql, graphql } from 'react-apollo'
import { connect } from 'react-redux'
import { open } from '../redux/modal'
import { reduxForm } from 'redux-form'
import Page from './Page'
import WithWindowSize from './WithWindowSize'

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
          id
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

const mapDispatchToProps = dispatch => ({
  open: (type, properties) => dispatch(open(type, properties))
})

const WithRedux = connect(null, mapDispatchToProps)(WithGraphQl)

export default WithWindowSize(WithRedux)
