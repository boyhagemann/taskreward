import { compose } from 'redux'
import { connect } from 'react-redux'
import { replace } from 'react-router-redux'
import Redirect from './Redirect'
import RedirectMutation from '../mutations/Redirect'

const mapDispatchToProps = dispatch => ({
  redirect: hash => dispatch(replace(`/leads/${hash}`))
})

const WithRedux = connect(null, mapDispatchToProps)

export default compose(
  WithRedux,
  RedirectMutation,
)(Redirect)
