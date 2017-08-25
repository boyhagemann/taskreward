import React from 'react'
import styled from 'styled-components'
import Box from './Box'

export default styled(props => <Box { ...props } />)`
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
  border-radius: 5px;
`
