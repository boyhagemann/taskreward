import React from 'react'
import Box from './UI/Box'
import MaxBox from './UI/MaxBox'
import Notification from './UI/Notification'


const PositionedBox = Box.extend`
  position: fixed;
  right: 0;
  bottom: 0;
`

const Notifications = props => <PositionedBox width={400} mr={2} mb={2} { ...props } />

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
