import React from 'react'
import Button from './UI/Button'
import { Link } from 'react-router-dom'
import { redirectUrl } from '../utils/routes'
import Container from './UI/Container'
import Box from './UI/Box'


export default ({ task }) => (
  <Container>
    <Box max={1200}>

      <p>This is the link: <strong>{redirectUrl(task.lead.hash)}</strong></p>

      <Button component={Link} to={`/r/${task.lead.hash}`}>Follow the redirect link</Button>
    </Box>
  </Container>
)
