import React from 'react'
// import NavbarContainer from './NavbarContainer'
import Navbar from './Navbar'

const items = [
  { to: '/page/dashboard', label: 'Dashboard' },
  { to: '/page/profile', label: 'Profile' },
  { to: '/page/preview', label: 'My page' },
  { to: '/page/leads', label: 'Leads', badge: { background: 'grass', count: 12 } },
  { to: '/page/claims', label: 'Claims', badge: { background: 'heart', count: 4 } },
]

const accountItems = [
  { to: '/dashboard', label: 'Switch to Referer' },
  { to: '/page/account', label: 'My account' },
  { to: '/page/preferences', label: 'Preferences' },
  { to: '/page/invoices', label: 'Invoices' },
  { to: '/logout', label: 'Logout' },
]

export default props => (
    <Navbar
      { ...props }
      items={items}
      accountItems={accountItems}
      />
)
