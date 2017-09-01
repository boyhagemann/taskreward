import { getUserByEvent } from './User'

export default ({
  user: (event) => getUserByEvent(event.id)
})
