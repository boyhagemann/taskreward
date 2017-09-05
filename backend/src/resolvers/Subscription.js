import pubsub from '../configuration/pubsub'

export default {
  event: {
    subscribe: () => pubsub.asyncIterator('event')
  }
}
