import React from 'react'
import styled from 'styled-components'
import RewardListItem from './RewardListItem'
import Container from './UI/Container'
import { Link } from 'react-router-dom'
import Box from './UI/Box'
import Button from './UI/Button'
import Heading from './UI/Heading'

const Actions = Box.extend`
  margin-top: 30px;
  text-align: right;
`

export default ({ data: { rewards = [] } }) => (
  <Container>
    <Box width={2/3}>
      <Heading>Rewards</Heading>
    </Box>
    <Actions width={1/3}>
      <Button positive huge component={Link} to={`/rewards/create`}>Create new reward</Button>
    </Actions>
    { rewards.map(RewardListItem) }
  </Container>
)
