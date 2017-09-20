import React from 'react'
import Box from '../UI/Box'
import Text from '../UI/Text'
import Moment from 'react-moment'

export default ({ text, date, actions }) => (
  <Box width={1} bg={`bleech`} p={1} mb={1}>
    <Box width={[1, 4/5]}>
      { typeof(text) === 'string'
        ? <Text m={0}>{text}</Text>
        : text
      }
      <Box mt={1} fontSize={0} color={'pencil+++'}>
        <Moment fromNow interval={1000}>{date}</Moment>
      </Box>
    </Box>
    { actions && <Box mt={1} width={[1, 1/5]} textAlign={['left', 'right']}>{ actions }</Box> }
  </Box>
)
