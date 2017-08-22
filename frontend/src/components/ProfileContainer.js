import { gql, graphql } from 'react-apollo'
import { reduxForm } from 'redux-form'
import Profile from './Profile'

const WithForm = reduxForm({
  form: 'profile',
})(Profile)

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
  props: ({ data: { loading, viewer = {} } }) => ({
    loading,
    profile: viewer.profile,
    initialValues: viewer.profile
  })
})(WithForm)
