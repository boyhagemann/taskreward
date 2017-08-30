import { gql, graphql, withApollo } from 'react-apollo'
import { reduxForm } from 'redux-form'
import ProfileForm from './ProfileForm'


const updateProfile = gql(`
  mutation updateProfile($input: UpdateProfileInput) {
    updateProfile(input: $input) {
      id
      name
      description
    }
  }
`)

const WithReduxForm = reduxForm({
  form: 'profile',
  onSubmit: (values, _, { request }) => request(values)
})(ProfileForm)

export default withApollo(graphql(updateProfile, {
  props: ({ mutate, ownProps }) => ({
    request: (values) => mutate({ variables: { input: values } })
  })
})(WithReduxForm))
