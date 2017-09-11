import React, { Component } from 'react'
import ProfileContainer from './ProfileContainer'
import PreviewContainer from './PreviewContainer'
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
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter as Router } from 'react-router-redux'
import { Provider } from 'react-redux'
import { store, history } from '../configuration/redux'
import styled, { injectGlobal } from 'styled-components'
import NavbarContainer from './NavbarContainer'
import ProfileNavbar from './ProfileNavbar'
import RefererNavbar from './RefererNavbar'
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

                <Switch>
                  <Route path={`/page/`} component={NavbarContainer(ProfileNavbar)} />
                  <Route path={`/`} component={NavbarContainer(RefererNavbar)} />
                </Switch>

                <Content>
                  <Route exact path={`/`} component={HomeContainer}/>
                  <Route path={'/page/dashboard'} component={AdminCanView(DashboardContainer)} />
                  <Route path={'/page/profile'} component={AdminCanView(ProfileContainer)} />
                  <Route exact path={'/page/leads'} component={AdminCanView(LeadsContainer)} />
                  <Route path={'/page/leads/:id'} component={AdminCanView(LeadContainer)} />
                  <Route path={'/page/preview'} component={AdminCanView(PreviewContainer)} />
                  <Route path={'/page/claims'} component={AdminCanView(() => (<div>Claims</div>))} />
                  <Route path={'/login'} component={LoginContainer} />
                  <Route path={'/logout'} component={Logout} />

                  <Route path={`/p/:hash`} component={PageContainer}/>
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
