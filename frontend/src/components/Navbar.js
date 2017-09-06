import React from 'react'
import styled from 'styled-components'
import Tab from './UI/Tab'
import MaxBox from './UI/MaxBox'
import Link from './UI/Link'
import Box from './UI/Box'
import Badge from './UI/Badge'
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

const renderTab = ({ to, label, badge }) => <Tab key={to} to={to} color={`pencil++++`} activeColor={`night`}>
  {label} { badge && <Badge bg={badge.background}>{badge.count}</Badge>}
</Tab>

const tabs = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/profile', label: 'Profile' },
  { to: '/preview', label: 'My page' },
  { to: '/leads', label: 'Leads', badge: { background: 'grass', count: 12 } },
  { to: '/claims', label: 'Claims', badge: { background: 'heart', count: 4 } },
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
              <Link mr={1} to={`/account`}>My account</Link>
              <Link mr={1} to={`/preferences`}>Preferences</Link>
              <Link mr={1} to={`/invoices`}>Invoices</Link>
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
