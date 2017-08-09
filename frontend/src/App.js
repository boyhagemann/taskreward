import React, { Component } from 'react'
import TaskListContainer from './components/TaskListContainer'
import TaskContainer from './components/TaskContainer'
import LeadContainer from './components/LeadContainer'
import LoginContainer from './components/LoginContainer'
import DashboardContainer from './components/DashboardContainer'
import { ApolloProvider } from 'react-apollo'
import client from './configuration/apollo'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './configuration/redux'
import { injectGlobal } from 'styled-components'

injectGlobal([`
  body {
    font-family: Arial;
    font-size: 20px;
    color: #456;
    background: #f4f6f8;
  }
`])

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Router>
            <div>
              <Link to={`/`}>Tasks</Link>
              <Route path={`/tasks/:id`} component={TaskContainer}/>
              <Route path={`/leads/:id`} component={LeadContainer}/>
              <Route exact path={'/'} component={TaskListContainer} />
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
