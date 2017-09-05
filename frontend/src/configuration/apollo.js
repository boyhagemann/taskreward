import { ApolloClient, createNetworkInterface, IntrospectionFragmentMatcher } from 'react-apollo'
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws'
import introspection from '../data/introspection'

const wsClient = new SubscriptionClient(`ws://localhost:3003/subscriptions`, {
  reconnect: true
});


const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: JSON.parse(introspection).data
})

// Create a normal network interface
const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3003/graphql',
  opts: {
    credentials: 'include',
  }
})

networkInterface.use([{
  applyMiddleware(req, next) {

    if (!req.options.headers) {
      req.options.headers = {};  // Create the header object if needed.
    }

    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('token') || null;

    req.options.headers.authorization = token ? `jwt ${token}` : null;

    next();
  }
}]);

// Extend the network interface with the WebSocket
const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
  networkInterface,
  wsClient
);

// Finally, create your ApolloClient instance with the modified network interface
const client = new ApolloClient({
  networkInterface: networkInterfaceWithSubscriptions,
  // fragmentMatcher,
 })

export default client
