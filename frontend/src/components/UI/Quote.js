import React from 'react'
import Box from './Box'
import Link from './Link'

export default ({ id, name, text }) => (
  <Box bg={`canvas`} p={1}>
    <Box>"{text}"</Box><br/>
    <Link to={`/page/leads/${id}`} fontSize={0}>{name}</Link>
  </Box>
)
