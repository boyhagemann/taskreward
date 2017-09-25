import React from 'react'
import Box from './Box'
import Text from './Text'

const getStatusProps = status => {

  switch(status) {

    case 'negative':
      return {
        bg: 'heart',
        color: 'bleech'
      }

    case 'warning':
      return {
        bg: 'love',
        color: 'bleech'
      }

    case 'positive':
      return {
        bg: 'grass',
        color: 'bleech'
      }

    case 'info':
      return {
        bg: 'ocean',
        color: 'bleech'
      }

    case 'notice':
      return {
        bg: 'beach+++',
        color: 'beach----'
      }

    default:
      return {
        bg: 'canvas-',
        color: 'pencil',
      }
  }
}

export default ({ text, status, close }) => (
  <Box width={1} p={1} mb={1} { ...getStatusProps(status) }>
    <Box width={4/5}>
      { typeof(text) === 'string'
        ? <Text m={0}>{text}</Text>
        : text
      }
    </Box>
    <Box width={1/5} textAlign={`right`}>
      <Text onClick={close} m={0}>X</Text>
    </Box>
  </Box>
)
