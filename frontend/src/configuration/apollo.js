import { ApolloClient, createNetworkInterface } from 'react-apollo'

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

const client = new ApolloClient({ networkInterface })

export default client
