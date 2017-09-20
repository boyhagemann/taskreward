import React from 'react'
import Box from '../UI/Box'
import Text from '../UI/Text'
import Moment from 'react-moment'

export default ({ text, date }) => (
  <Box width={1} bg={`bleech`} p={1} mb={1}>
    <Text m={0}>{text}</Text>
    <Box mt={1} fontSize={0} color={'pencil+++'}>
      <Moment fromNow interval={1000}>{date}</Moment>
    </Box>
  </Box>
)
