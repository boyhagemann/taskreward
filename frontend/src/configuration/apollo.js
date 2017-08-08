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

    // localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXIuMSIsImlhdCI6MTUwMjIwNjk4MX0.fBjGlzVCTmKbjDlAA2d1bQx6J4X02VXtxovW1Jda-aI')
    // localStorage.removeItem('token')

    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('token') || null;

    req.options.headers.authorization = token ? `jwt ${token}` : null;

    next();
  }
}]);

const client = new ApolloClient({ networkInterface })

export default client
