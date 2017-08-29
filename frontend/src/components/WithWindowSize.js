import { REDUCER_KEY } from 'redux-windowsize'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  windowSize: state[REDUCER_KEY]
})

export default connect(mapStateToProps)
