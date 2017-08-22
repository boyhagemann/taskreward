import {  gql, graphql, withApollo } from 'react-apollo'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { push } from 'react-router-redux'
import Login from './Login'

const requestToken = gql(`
  mutation requestToken($email: String!, $password: String!) {
    requestToken(email: $email, password: $password) {
      ok
      token
      message
    }
  }
`)


const WithReduxForm = reduxForm({
  form: 'authentication',
  onSubmit: ({ email, password }, _, { request }) => request(email, password)
})(Login)

const WithGraphql = withApollo(graphql(requestToken, {
  props: ({ mutate, ownProps }) => ({
    request: (email, password) => mutate({ variables: { email, password } })
      .then(response => {
        const data = response.data.requestToken
        console.log(data)
        if(data.ok) {

          // 1. Remember the token
          localStorage.setItem('token', data.token)

          // 2. Clear any cache from the Apollo client redux store and
          //    Use the new token to refetch with new privileges
          ownProps.client.resetStore()

          // 3. Redirect to the right page
          ownProps.redirect()
        }
      })
      .catch(error => console.error('Got error', error))
  })
})(WithReduxForm))

const mapDispatchToProps = dispatch => ({
  redirect: () => dispatch(push('/dashboard'))
})

export default connect(null, mapDispatchToProps)(WithGraphql)
