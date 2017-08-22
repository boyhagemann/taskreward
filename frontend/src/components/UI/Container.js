import React from 'react'
import styled from 'styled-components'
import Box from './Box'

const Container = styled.div`
  margin: 0 auto;
  text-align: center;
  background: ${ ({ path, theme }) => theme[path] ? theme[path].background : null };
  color: ${ ({ path, theme }) => theme[path] ? theme[path].color : null };
`

const Composed = ({ themePath = 'container', children }) => (
  <Container path={themePath}>
    <Box width={1200}>
      { children }
    </Box>
  </Container>
)

export default Composed
