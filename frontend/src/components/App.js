import React, { Component } from 'react'
import TaskListContainer from './TaskListContainer'
import TaskContainer from './TaskContainer'
import LeadContainer from './LeadContainer'
import LoginContainer from './LoginContainer'
import DashboardContainer from './DashboardContainer'
import { ApolloProvider } from 'react-apollo'
import client from '../configuration/apollo'
import { Route, Link } from 'react-router-dom'
import { ConnectedRouter as Router } from 'react-router-redux'
import { Provider } from 'react-redux'
import { store, history } from '../configuration/redux'
import styled, { injectGlobal } from 'styled-components'
import Navbar from './Navbar'
import { ThemeProvider } from 'styled-components'
import defaultTheme from '../themes/default'

injectGlobal([`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    font-size: 16px;
    color: #456;
    background: #f4f6f8;
  }
`])

const Content = styled.div`
  box-sizing: border-box;
  padding-left: 100px;
`

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Router history={history}>
            <ThemeProvider theme={defaultTheme}>
              <div>
                <Navbar />
                <Content>
                  <Route path={`/tasks/:id`} component={TaskContainer}/>
                  <Route path={`/leads/:id`} component={LeadContainer}/>
                  <Route exact path={'/tasks'} component={TaskListContainer} />
                  <Route exact path={'/login'} component={LoginContainer} />
                  <Route exact path={'/dashboard'} component={DashboardContainer} />
                </Content>
              </div>
            </ThemeProvider>
          </Router>
        </Provider>
      </ApolloProvider>
    );
  }
}

export default App;
