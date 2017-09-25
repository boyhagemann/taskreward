import React from 'react'
import Box from './UI/Box'
import MaxBox from './UI/MaxBox'
import Notification from './UI/Notification'

const Notifications = props => <Box width={1} my={2} px={1} { ...props } />

export default ({ notifications = [], stop }) => notifications.length ? (
  <MaxBox>
    <Notifications>
    { notifications.map(notification => (
      <Notification
        key={notification.id}
        { ...notification }
        close={ () => stop(notification.id) }
      />
    )) }
    </Notifications>
  </MaxBox>
) : null
