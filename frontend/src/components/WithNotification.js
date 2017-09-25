import { connect } from 'react-redux'
import { notify } from '../redux/notifications'

export default connect(null, dispatch => ({
  notify: (text, status) => dispatch(notify({ text, status }))
}))
