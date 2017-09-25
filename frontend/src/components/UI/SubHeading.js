import React from 'react'
import styled from 'styled-components'
import { space, fontSize, color } from 'styled-system'

const StyledSubHeading = styled.h2`
  font-weight: normal;
  font-family:  'Raleway';
  display: inline-block;
  box-sizing: border-box;
  ${space}
  ${fontSize}
  ${color}
`

export default props => <StyledSubHeading fontSize={5} mt={2} mb={1} { ...props } />
