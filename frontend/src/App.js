import React, { Component } from 'react'
import ListContainer from './components/ListContainer'
import ItemContainer from './components/ItemContainer'

import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:3001/graphql',
  }),
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="App">
            <Link to={`/`}>Tasks</Link>
            <Route path={`/:id`} component={ItemContainer}/>
            <Route exact path={'/'} component={ListContainer} />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
