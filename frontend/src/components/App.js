import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import client from '../configuration/apollo'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter as Router } from 'react-router-redux'
import { Provider } from 'react-redux'
import { store, history } from '../configuration/redux'
import styled, { injectGlobal, ThemeProvider } from 'styled-components'
import defaultTheme from '../themes/default'
import Allowed from './Allowed'
import Box from './UI/Box'
import Footer from './Footer'
import NotificationsContainer from './NotificationsContainer'

import HomeContainer from './HomeContainer'
import LoginContainer from './LoginContainer'
import Logout from './Logout'
import ModalContainer from './Modals/ModalContainer'

import PageDashboardContainer from './PageDashboardContainer'
import PageProfileContainer from './PageProfileContainer'
import PagePreviewContainer from './PagePreviewContainer'
import PageContainer from './PageContainer'
import PageLeadContainer from './PageLeadContainer'
import PageLeadsContainer from './PageLeadsContainer'
import RedirectContainer from './RedirectContainer'

import LeadsContainer from './LeadsContainer'
import RewardsContainer from './RewardsContainer'
import UserSettings from './UserSettings'

import NavbarContainer from './NavbarContainer'
import PageNavbar from './PageNavbar'
import RefererNavbar from './RefererNavbar'

const AdminCanView = component => Allowed(true, '/login', ['admin'])(component)
const GuestCanView = component => Allowed(false, '/page/dashboard')(component)

injectGlobal([`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    color: #456;
    background: #234;
  }
`])

const Content = styled(props => <Box width={1} bg={`canvas`} pb={4} { ...props } />)`
  padding-top: 73px;
  min-height: 700px;
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
                  <Route path={`/page/`} component={NavbarContainer(PageNavbar)} />
                  <Route path={`/`} component={NavbarContainer(RefererNavbar)} />
                </Switch>

                <Content>
                  <NotificationsContainer />
                  <Route exact path={`/`} component={HomeContainer}/>
                  <Route path={'/login'} component={GuestCanView(LoginContainer)} />
                  <Route path={'/logout'} component={Logout} />

                  <Route path={'/page/dashboard'} component={AdminCanView(PageDashboardContainer)} />
                  <Route path={'/page/profile'} component={AdminCanView(PageProfileContainer)} />
                  <Route exact path={'/page/leads'} component={AdminCanView(PageLeadsContainer)} />
                  <Route path={'/page/leads/:id'} component={AdminCanView(PageLeadContainer)} />
                  <Route path={'/page/preview'} component={AdminCanView(PagePreviewContainer)} />
                  <Route path={'/page/claims'} component={AdminCanView(() => (<div>Claims</div>))} />

                  <Route path={'/leads'} component={LeadsContainer} />
                  <Route path={'/rewards'} component={RewardsContainer} />
                  <Route path={'/my'} component={UserSettings} />

                  <Route path={`/p/:hash`} component={PageContainer}/>
                  <Route path={`/r/:hash`} render={ ({ match }) => <RedirectContainer hash={match.params.hash} /> } />

                </Content>

                <Footer />

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
