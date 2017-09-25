import uuid from 'uuid/v4'

const NOTIFICATION_START = 'notification.start'
const NOTIFICATION_STOP = 'notification.stop'

export const notify = ({ text, status, seconds = 5 }) => dispatch => {

  const id = uuid()

  dispatch({
    type: NOTIFICATION_START,
    id,
    text,
    status
  })

  setTimeout( () => {
    dispatch(stop(id))
  }, seconds * 1000)
}

export const stop = id => ({ type: NOTIFICATION_STOP, id })

export default (state = [], action) => {

  switch(action.type) {

    case NOTIFICATION_START: {
      const { id, status, text } = action
      return [ ...state, { id, status, text }]
    }

    case NOTIFICATION_STOP:
      return state.filter( ({ id }) => id !== action.id)

    default:
      return state
  }
}
