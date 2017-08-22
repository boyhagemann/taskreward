import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Box from './UI/Box'
import Card from './UI/Card'
import Button from './UI/Button'

const Heading = styled(Link)`
  margin: 0;
  text-decoration: none;
  color: ${ ({ theme}) => theme.reward.list.item.heading.color };
  font-size: 1.5em;
`
const Description = styled.p``
const Owner = styled.div``

const Item = styled(Card)``

const Actions = styled(Box)`
  > ${Button} {
    margin-right: 5px;
  }
`

export default ({ id, name, description, reward, lead: { hash } }) => (
  <Item key={id}>
    <Box width={4/6}>
      <Heading to={`/rewards/${id}`}>{ name }</Heading>
      <Description>{ description }</Description>
      <Actions>
        <Button primary component={Link} to={`/rewards/${id}`}>Dashboard</Button>
        <Button component={Link} to={`/r/${hash}`}>View</Button>
      </Actions>
    </Box>
    <Box width={2/6}>
      <Owner>{ reward }</Owner>
    </Box>
  </Item>
)
