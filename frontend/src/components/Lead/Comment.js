import React from 'react'
import Box from '../UI/Box'
import Button from '../UI/Button'
import TextArea from '../UI/TextArea'

const Actions = props => <Box mt={1} { ...props } />

export default ({ profile }) => (
  <Box width={1}>
    <Box width={1}>
      <TextArea
        placeholder={`Type a comment and hit enter...`}
      />
    </Box>
    <Actions width={1}>
      <Button primary type="button">Make note</Button>
    </Actions>
  </Box>
)
