import React from 'react'
import styled from 'styled-components'
import Box from './Box'

export const Container = styled.div`
  margin: 0 auto;
  text-align: center;
`

const Composed = ({ children }) => (
  <Container>
    <Box width={1200}>
      { children }
    </Box>
  </Container>
)

export default Composed
