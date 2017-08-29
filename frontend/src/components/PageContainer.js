import { gql, graphql } from 'react-apollo'
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

export default WithWindowSize(WithGraphQl)
