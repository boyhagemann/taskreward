import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'
import cors from 'cors'
import typeDefs from './types'
import resolvers from './resolvers'
import { getUserByToken } from './resolvers/User'
import { SECRET, PORT } from './constants'
import { id } from './resolvers/helpers'


import { execute, subscribe } from 'graphql'
import { createServer } from 'http'
import { SubscriptionServer } from 'subscriptions-transport-ws'


const schema = makeExecutableSchema({ typeDefs, resolvers })

const app = express();



app.use(bodyParser.json())
// app.use('*', cors({ origin: `http://localhost:${PORT}` }));
app.use(cors({
  origin: 'http://localhost:3002',
  credentials: true
}))

const extractToken = () => async (req, res, next) => {

  const authorization = req.headers.authorization

  // Get the token from the request query params or from the 'jwt' header
  const token =
    req.query.token ||
    (
      authorization && authorization.match('jwt ')
        ? authorization.split(' ')[1] :
        null
    )

  if(token) {
    try {
      req.user = await getUserByToken(token)
    }
    catch(error) {
      console.error('Error in jwt verify', error)
    }
  }

  next()
}

// bodyParser is needed just for POST.
app.post('/graphql',
  bodyParser.json(),
  extractToken(),
  (req, res, next) => {

    const { user } = req
    const context = { user }

    graphqlExpress({ schema, context })(req, res, next)
  }
);

// Add the Graphil UI
app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
  subscriptionsEndpoint: `ws://localhost:3003/subscriptions`
}));

// app.listen(PORT);

// Wrap the Express server
const ws = createServer(app)
ws.listen(PORT, () => {
  console.log(`Apollo Server is now running on http://localhost:3003`)

  // Set up the WebSocket for handling GraphQL subscriptions
  new SubscriptionServer({
    schema,
    execute,
    subscribe,
  }, {
    server: ws,
    path: '/subscriptions',
  })

})
