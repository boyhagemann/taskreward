import React from 'react'
import moment from 'moment'
import Box from '../UI/Box'
import Heading from '../UI/Heading'

export default ({ createdAt, user }) => (
  <Box width={1} bg={`bleech`} p={1} mb={1}>
    <Heading fontSize={3} m={0}>{ user.name } created lead</Heading>
    <Box fontSize={0}>{ moment(createdAt).fromNow() }</Box>
  </Box>
)
