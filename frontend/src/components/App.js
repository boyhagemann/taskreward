import React, { Component } from 'react'
import ProfileContainer from './ProfileContainer'
import PreviewContainer from './PageContainer'
import PageContainer from './PageContainer'
import LeadContainer from './LeadContainer'
import LeadsContainer from './LeadsContainer'
import RedirectContainer from './RedirectContainer'
import HomeContainer from './HomeContainer'
import LoginContainer from './LoginContainer'
import Logout from './Logout'
import DashboardContainer from './DashboardContainer'
import { ApolloProvider } from 'react-apollo'
import client from '../configuration/apollo'
import { Route } from 'react-router-dom'
import { ConnectedRouter as Router } from 'react-router-redux'
import { Provider } from 'react-redux'
import { store, history } from '../configuration/redux'
import styled, { injectGlobal } from 'styled-components'
import NavbarContainer from './NavbarContainer'
import { ThemeProvider } from 'styled-components'
import defaultTheme from '../themes/default'
import Allowed from './Allowed'
import ModalContainer from './Modals/ModalContainer'

const AdminCanView = component => Allowed(['admin'])(component)

injectGlobal([`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    font-size: 16px;
    color: #456;
    background: #f3f1eb;
  }
`])

const Content = styled.div`
  padding-top: 70px;
`

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Router history={history}>
            <ThemeProvider theme={defaultTheme}>
              <div>
                <NavbarContainer />
                <Content>
                  <Route exact path={`/`} component={HomeContainer}/>
                  <Route path={'/dashboard'} component={AdminCanView(DashboardContainer)} />
                  <Route path={'/profile'} component={AdminCanView(ProfileContainer)} />
                  <Route exact path={'/leads'} component={AdminCanView(LeadsContainer)} />
                  <Route path={'/leads/:id'} component={AdminCanView(LeadContainer)} />
                  <Route path={'/preview'} component={AdminCanView(PreviewContainer)} />
                  <Route path={'/claims'} component={AdminCanView(() => (<div>Claims</div>))} />
                  <Route path={'/login'} component={LoginContainer} />
                  <Route path={'/logout'} component={Logout} />

                  <Route path={`/page/:hash`} component={PageContainer}/>
                  <Route path={`/r/:hash`} render={ ({ match }) => <RedirectContainer hash={match.params.hash} /> } />
                </Content>
                <ModalContainer />
              </div>
            </ThemeProvider>
          </Router>
        </Provider>
      </ApolloProvider>
    );
  }
}

export default App;
