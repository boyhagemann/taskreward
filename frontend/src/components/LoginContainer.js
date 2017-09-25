import { withApollo } from 'react-apollo'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { push } from 'react-router-redux'
import Login from './Login'
import LoginMutation from '../mutations/Login'
import { notify } from '../redux/notifications'


const WithReduxForm = reduxForm({
  form: 'authentication',
  onSubmit: ({ email, password }, _, { request }) => request(email, password)
})


const mapDispatchToProps = dispatch => ({
  redirect: () => dispatch(push('/dashboard')),
  notify: (text) => dispatch(notify({ }))
})

const WithRedux = connect(null, mapDispatchToProps)

export default compose(
  WithRedux,
  withApollo,
  LoginMutation,
  WithReduxForm,
)(Login)
