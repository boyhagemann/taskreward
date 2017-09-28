import React from 'react'
import Box from '../UI/Box'
import Text from '../UI/Text'
import Moment from 'react-moment'
import Avatar from '../UI/Avatar'
import Icon from '../UI/Icon'

export default ({ icon, text, date, actions }) => (
  <Box width={1} bg={`bleech`} p={1} mb={1}>
    <Box width={[1, 4/5]}>
      { icon && <Icon name={icon} size={5} color={`pencil+++`} opacity={0.2} mt={1} mr={2} /> }
      <Box>
      { text }
        <Box mt={1} fontSize={0} color={'pencil+++'}>
          <Moment fromNow interval={1000}>{date}</Moment>
        </Box>
      </Box>
    </Box>
    { actions && <Box width={[1, 1/5]} textAlign={['left', 'right']}>{ actions }</Box> }
  </Box>
)
