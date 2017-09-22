import React from 'react'

import Box from './Box'
import Heading from './Heading'
import Icon from './Icon'

const Container = props => <Box width={1} { ...props } mt={3} />
const Title = props => <Box width={[1, 4/5]} { ...props } />
const Actions = props => <Box width={[1, 1/5]} pt={2} textAlign={['left', 'right']} { ...props } />

export default ({ title, icon, actions = []}) => (
  <Container>
    <Title>
      <Heading>
        { icon && <Icon name={icon} size={5} color={`pencil++++`} mr={2} /> }
        {title}
      </Heading>
    </Title>
    <Actions>{actions}</Actions>
  </Container>
)
