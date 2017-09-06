import React from 'react'
import Box from '../UI/Box'
import Button from '../UI/Button'
import TextArea from '../UI/TextArea'

const Actions = props => <Box mt={1} { ...props } />

export default ({ profile }) => (
  <Box width={1}>
    <Box width={1}>
      <TextArea
        placeholder={`Type a message to ${profile.lead.user.name} and hit enter...`}
      />
    </Box>
    <Box width={1}>
      <Box width={[1, 'auto']}>
        <input type="radio" name="medium" value="email" />
        <label htmlFor="email">Email</label>
      </Box>
      <Box width={[1, 'auto']}>
        <input type="radio" name="medium[sms]" />
        <label htmlFor="sms">SMS</label>
      </Box>
      <Box width={[1, 'auto']}>
        <input type="radio" name="medium[facebook]" />
        <label htmlFor="facebook">Facebook</label>
      </Box>
      <Box width={[1, 'auto']}>
        <input type="radio" name="medium[whatsapp]" />
        <label htmlFor="whatsapp">Whatsapp</label>
      </Box>
      <Box width={[1, 'auto']}>
        <input type="radio" name="medium[chat]" />
        <label htmlFor="chat">Chat</label>
      </Box>
    </Box>
    <Actions width={1}>
      <Button primary type="button">Send</Button>
    </Actions>
  </Box>
)
