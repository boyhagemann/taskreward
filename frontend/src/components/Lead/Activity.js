import React from 'react'
import Event from '../Event'
import Box from '../UI/Box'

export default ({ viewer }) => (
  <Box width={1}>
    { viewer.profile.lead.events.map(event => <Event key={event.id} viewer={viewer} event={event} />)}
  </Box>
)
