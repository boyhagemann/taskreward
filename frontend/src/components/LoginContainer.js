import {  gql, graphql } from 'react-apollo'
import { reduxForm } from 'redux-form'
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


const FormWithRedux = reduxForm({
  form: 'authentication',
  onSubmit: ({ email, password }, _, { request }) => request(email, password)
})(Login)

export default graphql(requestToken, {
  props: ({ mutate }) => ({
    request: (email, password) => mutate({ variables: { email, password } })
      .then(response => {
        const data = response.data.requestToken
        if(data.ok) {
          console.log('Got token', data.token)
          localStorage.setItem('token', data.token)
        }
      })
      .catch(error => console.error('Got error', error))
  })
})(FormWithRedux)
