import React from 'react'
import Button from './UI/Button'
import { Link } from 'react-router-dom'
import { redirectUrl } from '../utils/routes'
import Container from './UI/Container'
import Box from './UI/Box'


export default ({ reward }) => (
  <Container>

    <p>This is the link: <strong>{redirectUrl(reward.lead.hash)}</strong></p>

    <Button component={Link} to={`/r/${reward.lead.hash}`}>Follow the redirect link</Button>

  </Container>
)
