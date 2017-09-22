import React from 'react'
import MaxBox from './UI/MaxBox'
import Box from './UI/Box'

export default () => (
  <Box width={1} bg={`night`} py={4}>
    <MaxBox>
      <Box width={[1, 1/3]}>
        First column
      </Box>
      <Box width={[1, 1/3]}>
        Second column
      </Box>
      <Box width={[1, 1/3]}>
        Third column
      </Box>
    </MaxBox>
  </Box>
)
