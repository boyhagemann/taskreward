import React from 'react'
import moment from 'moment'
import Box from '../UI/Box'
import Heading from '../UI/Heading'

export default ({ createdAt, value, user, lead, reward, }) => (
  <Box width={1} bg={`bleech`} p={1} mb={1}>
    <Heading fontSize={3} m={0}>{ user.name } rewarded { lead.user.name } with { value } for accomplishing reward { reward.name}.</Heading>
    <Box fontSize={0}>{ moment(createdAt).fromNow() }</Box>
  </Box>
)
