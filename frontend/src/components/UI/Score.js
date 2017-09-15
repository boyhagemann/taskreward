import React from 'react'
import Box from './Box'
import { round } from '../../utils/numbers'

const color = value => {
  if(value > 0.8) {
    return 'grass'
  }
  else if(value > 0.5) {
    return 'ocean'
  }
  else {
    return 'heart'
  }
}

export default ({ value }) => (
  <Box bg={`canvas`} color={color(value)} fontSize={2} p={1}>{ round(value * 10, 1) }</Box>
)
