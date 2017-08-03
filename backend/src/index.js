import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'
import { createTask, getTasks } from './resolvers'
import cors from 'cors'
import typeDefs from './types'
import resolvers from './resolvers'

let tasks = [
  { id: 1, owner: 2, name: 'Some task', description: 'Some description', link: '/test' },
  { id: 2, owner: 1, name: 'Some other task', description: 'Some description', link: '/test' },
]

const schema = makeExecutableSchema({ typeDefs, resolvers })

const PORT = 3000;

const app = express();

// bodyParser is needed just for POST.
app.use('/graphql', cors(), bodyParser.json(), graphqlExpress({ schema }));

// Add the Graphil UI
app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

app.listen(PORT);
