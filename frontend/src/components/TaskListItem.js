import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Box from './UI/Box'
import Card from './UI/Card'
import Button from './UI/Button'

const Heading = styled(Link)`
  margin: 0;
`
const Description = styled.p``
const Owner = styled.div``

export default ({ id, name, description, reward }) => (
  <Card key={id}>
    <Box width={4/6}>
      <Heading to={`/tasks/${id}`}>{ name }</Heading>
      <Description>{ description }</Description>
    </Box>
    <Box width={1/6}>
      <Owner>{ reward }</Owner>
    </Box>
    <Box width={1/6}>
      <Button component={Link} to={`/tasks/${id}`}>View</Button>
    </Box>
  </Card>
)
