import { withApollo } from 'react-apollo'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { stop } from '../redux/notifications'
import Notifications from './Notifications'


const mapStateToProps = state => ({
  notifications: state.notifications
})

const mapDispatchToProps = (dispatch, { id }) => ({
  close: () => dispatch(stop(id))
})

const WithRedux = connect(mapStateToProps, mapDispatchToProps)

export default compose(
  WithRedux,
)(Notifications)
