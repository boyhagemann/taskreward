import React from 'react'
// import NavbarContainer from './NavbarContainer'
import Navbar from './Navbar'

const items = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/leads', label: 'Leads', },
  { to: '/rewards', label: 'Rewards', badge: { background: 'grass', count: 5 } },
]

const accountItems = [
  { to: '/my/account', label: 'My account', icon: 'profile' },
  { to: '/my/preferences', label: 'Preferences', icon: 'cogwheel' },
  { to: '/my/payments', label: 'Payments', icon: 'money' },
  { to: '/logout', label: 'Logout', icon: 'power' },
]

const switchToPage = { to: '/page/dashboard', label: 'Switch to Page', icon: 'switch' }

const getAccountItems = ({ data }) => {
  return data.viewer && data.viewer.profile
  ? [ switchToPage, ...accountItems ]
  : accountItems
}

export default props => (
  <Navbar
    { ...props }
    items={items}
    accountItems={getAccountItems(props)}
    />
)
