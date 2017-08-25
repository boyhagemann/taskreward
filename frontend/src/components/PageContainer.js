import { gql, graphql } from 'react-apollo'
import { reduxForm } from 'redux-form'
import Page from './Page'

const WithForm = reduxForm({
  form: 'page',
})(Page)

export default graphql(gql`
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
