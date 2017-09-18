import React from 'react'

import Box from './Box'
import Heading from './Heading'

const Container = props => <Box width={1} { ...props } />
const Title = props => <Box width={[1, 4/5]} { ...props } />
const Actions = props => <Box width={[1, 1/5]} pt={2} textAlign={['left', 'right']} { ...props } />

export default ({ title, actions = []}) => (
  <Container>
    <Title>
      <Heading>{title}</Heading>
    </Title>
    <Actions>{actions}</Actions>
  </Container>
)
