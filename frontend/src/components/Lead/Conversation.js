import React, { Component } from 'react'
import Box from '../UI/Box'
import Button from '../UI/Button'
import Heading from '../UI/Heading'
import TextArea from '../UI/TextArea'

const Actions = Box.extend`
  text-align: right;
`

export default props => (
  <Box width={1}>
    <Heading>Send a message</Heading>
    <Box width={1}>
      <TextArea></TextArea>
    </Box>
    <Box width={[1, 4/5]}>
      <Box>
        <input type="radio" name="medium" value="email" />
        <label htmlFor="email">Email</label>
      </Box>
      <Box>
        <input type="radio" name="medium[sms]" />
        <label htmlFor="sms">SMS</label>
      </Box>
      <Box>
        <input type="radio" name="medium[facebook]" />
        <label htmlFor="facebook">Facebook</label>
      </Box>
      <Box>
        <input type="radio" name="medium[whatsapp]" />
        <label htmlFor="whatsapp">Whatsapp</label>
      </Box>
      <Box>
        <input type="radio" name="medium[chat]" />
        <label htmlFor="chat">Chat</label>
      </Box>
    </Box>
    <Actions width={[1, 1/5]}>
      <Button primary type="button">Send</Button>
    </Actions>
  </Box>
)
