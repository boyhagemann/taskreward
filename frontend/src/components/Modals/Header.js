import React from 'react'
import styled from 'styled-components'
import Box from '../UI/Box'


const Header = props => <Box width={1} p={2} bg={`grass`} color={`bleech`} { ...props } />

const Heading = styled.h3`
  margin: 0;
`

const HeaderActions = styled(props => <Box width={1/12} { ...props } />)`
  text-align: right;
`

const Close = styled.span`
  cursor: pointer;
`

export default ({ title, close }) => (
  <Header>
    <Box width={11/12}>
      <Heading>{ title }</Heading>
    </Box>
    <HeaderActions>
      <Close onClick={close}>X</Close>
    </HeaderActions>
  </Header>
)
