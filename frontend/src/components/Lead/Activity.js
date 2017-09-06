import React from 'react'
import Event from '../Event'
import Box from '../UI/Box'

export default ({ profile }) => (
  <Box width={1}>
    { profile.lead.events.map(Event)}
  </Box>
)
