import React from 'react'
import styled from 'styled-components'
import Link from './Link'
import Icon from './Icon'
import Box from './Box'

const Logo = styled(Box)`
  font-family: 'Passion One', cursive;
  text-transform: uppercase;
  font-size: 40px;
`

export default ({ logoColor = 'grass', color = 'night'}) => (
    <Link to={`/`}>
      <Icon name="crowd" size={6} color={logoColor} mr={1} />
      <Logo color={color}>Croudio</Logo>
    </Link>
)
