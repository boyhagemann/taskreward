import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Tab from './UI/Tab'
import MaxBox from './UI/MaxBox'
import Box from './UI/Box'
import Button from './UI/Button'


const Bar = Box.extend`
  position: fixed;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
  z-index: 10;
`


const Account = Box.extend`
  text-align: right;
`

const Name = styled.span`
  font-weight: bold;
`

const renderTab = ({ to, label }) => <Tab key={to} exact to={to} color={`pencil++++`} activeColor={`night`}>{label}</Tab>
const tabs = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/profile', label: 'Profile' },
  { to: '/page', label: 'My page' },
  { to: '/leads', label: 'Leads' },
  { to: '/claims', label: 'Claims' },
]

export default ({ loading, viewer = {} }) => loading ? null : (
  <Bar bg={`bleech`} py={2}>
    <MaxBox>
      <Box width={9/12} color={`night+++`}>
        { viewer.name
          ? tabs.map(renderTab)
          : <Tab exact to={`/`}>Home</Tab>
        }
      </Box>
      <Account width={3/12}>
        { viewer.name
          ? (
            <div>
              <div>Logged in as <Name>{viewer.name}</Name></div>
              <Link to={`/account`}>My account</Link>
              <Link to={`/preferences`}>Preferences</Link>
              <Link to={`/invoices`}>Invoices</Link>
              <Link to={`/logout`}>Logout</Link>
            </div>
          )
          : (
            <Button primary component={Link} to={`/login`}>Login</Button>
          )
        }
      </Account>
  </MaxBox>
  </Bar>
)
