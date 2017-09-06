import React from 'react'
import Box from '../UI/Box'
import Button from '../UI/Button'
import Heading from '../UI/Heading'
import TextArea from '../UI/TextArea'
import Tab from '../UI/Tab'
import Message from './Message'
import Comment from './Comment'
import { Route } from 'react-router-dom'

const Tabs = props => <Box mt={1} { ...props } />

const StyledTab = props => (
  <Tab
    p={1}
    bg={`canvas-`}
    color={`pencil`}
    activeBg={`canvas--`}
    activeColor={`night`}
    { ...props }
  />
)

export default ({ profile }) => (
  <Box width={1}>

    <Box width={1} bg={`bleech`} p={2} mb={3}>
      Some conversation here..
    </Box>

    <Tabs>
      <StyledTab exact to={`/leads/${profile.lead.id}/conversation`}>Send a message</StyledTab>
      <StyledTab to={`/leads/${profile.lead.id}/conversation/comment`}>Make notes</StyledTab>
    </Tabs>

    <Route exact path={`/leads/${profile.lead.id}/conversation`} render={ () => <Message profile={profile} /> } />
    <Route path={`/leads/${profile.lead.id}/conversation/comment`} render={ () => <Comment profile={profile} /> } />

  </Box>
)
