import React from 'react'
import Box from './UI/Box'
import Notification from './UI/Notification'

const Notifications = props => <Box width={1} my={2} { ...props } />

export default ({ notifications = [], stop }) => notifications.length ? (
  <Notifications>
  { notifications.map(notification => (
    <Notification
      key={notification.id}
      { ...notification }
      close={ () => stop(notification.id) }
    />
  )) }
  </Notifications>
) : null
