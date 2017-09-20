import React from 'react'
// import NavbarContainer from './NavbarContainer'
import Navbar from './Navbar'

const items = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/leads', label: 'Leads', },
  { to: '/rewards', label: 'Rewards', badge: { background: 'grass', count: 5 } },
]

const accountItems = [
  { to: '/page/dashboard', label: 'Switch to Page' },
  { to: '/my/account', label: 'My account' },
  { to: '/my/preferences', label: 'Preferences' },
  { to: '/my/payments', label: 'Payments' },
  { to: '/logout', label: 'Logout' },
]

export default props => (
  <Navbar
    { ...props }
    items={items}
    accountItems={accountItems}
    />
)
