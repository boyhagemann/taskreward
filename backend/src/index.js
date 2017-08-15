import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'
import { createTask, getTasks } from './resolvers'
import cors from 'cors'
import typeDefs from './types'
import resolvers from './resolvers'
import { getUser } from './resolvers/User'

import jwt from 'jsonwebtoken'
import { id } from './resolvers/helpers'




const schema = makeExecutableSchema({ typeDefs, resolvers })
const PORT = 3000;
const SECRET = 'fdst3401$sxk&d&^@@WWQR%%wefq43o54@#F*&$%GGq23s'

const app = express();

app.use(bodyParser.json())
app.use(cors({
  origin: 'http://localhost:3002',
  credentials: true
}))

const extractToken = () => async (req, res, next) => {

  const authorization = req.headers.authorization
  const token = authorization && authorization.match('jwt ')
    ? authorization.split(' ')[1] : null

  if(token) {
    try {
      const decoded = jwt.verify(token, SECRET)
      const user = await getUser(decoded.id)

      req.user = user
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
    console.log('Is there a user?', user)

    const context = { user }

    graphqlExpress({ schema, context })(req, res, next)
  }
);

// Add the Graphil UI
app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

app.listen(PORT);
