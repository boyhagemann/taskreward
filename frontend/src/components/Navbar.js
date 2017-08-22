import React from 'react'
import styled from 'styled-components'
import Container from './UI/Container'
import { NavLink, Link } from 'react-router-dom'
import Box from './UI/Box'
import Button from './UI/Button'

const Bar = styled(Container)`
  position: fixed;
`

const Tab = styled(NavLink)`
  display: inline-block;
  margin-right: 3px;
  background: ${ ({ theme }) => theme.navbar.tab.default.background };
  color: ${ ({ theme }) => theme.navbar.tab.default.color };
  padding: 10px;
  text-decoration: none;

  &.${ ({ theme }) => theme.navbar.tab.active.className || 'active' } {
    background: ${ ({ theme }) => theme.navbar.tab.active.background };
    color: ${ ({ theme }) => theme.navbar.tab.active.color };
  }
`

const Account = Box.extend`
  text-align: right;
`

export default ({ loading, viewer }) => loading ? null : (
  <Bar>
    { console.log(viewer) }
    <Box width={9/12}>
      { viewer
        ? [
          <Tab exact to={`/dashboard`}>Dashboard</Tab>,
          <Tab to={`/profile`}>Profile</Tab>,
          <Tab to={`/page`}>My page</Tab>,
          <Tab to={`/leads`}>Leads</Tab>,
        ]
        : <Tab exact to={`/`}>Home</Tab>
      }
    </Box>
    <Account width={3/12}>
      { viewer
        ? (
          <div>
            <div>Welcome, {viewer.name}</div>
            <Link to={`/logout`}>Logout</Link>
          </div>
        )
        : (
          <Button primary component={Link} to={`/login`}>Login</Button>
        )
      }
    </Account>
  </Bar>
)
