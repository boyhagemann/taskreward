import React, { Component } from 'react'
import ListContainer from './components/ListContainer'
import ItemContainer from './components/ItemContainer'
import LoginContainer from './components/LoginContainer'
import DashboardContainer from './components/DashboardContainer'
import { ApolloProvider } from 'react-apollo'
import client from './configuration/apollo'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './configuration/redux'


class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Router>
            <div className="App">
              <Link to={`/`}>Tasks</Link>
              <Route path={`/:id`} component={ItemContainer}/>
              <Route exact path={'/'} component={ListContainer} />
              <Route exact path={'/login'} component={LoginContainer} />
              <Route exact path={'/dashboard'} component={DashboardContainer} />
            </div>
          </Router>
        </Provider>
      </ApolloProvider>
    );
  }
}

export default App;
