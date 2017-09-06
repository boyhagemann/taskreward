import React from 'react'
import Box from './Box'

export default ({ from, text }) => (
  <Box bg={`canvas`} p={1}>
    <Box>"{text}"</Box><br/>
    <Box fontSize={0} color={`dirt`}>{from}</Box>
  </Box>
)
