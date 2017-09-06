import React from 'react'
import styled from 'styled-components'
import { space, width, fontSize, color, removeProps } from 'styled-system'

const Component = ({ component: Component = 'button', primary, positive, negative, huge, ...props}) => {
  const cleanProps = removeProps(props)
  return <Component {...cleanProps} />
}

const getColor = props => {
  switch(true) {

    case (props.primary):
    case (props.positive):
    case (props.negative):
      return 'bleech'

    default:
      return 'pencil'
    }
}

const getBackground = props => {
  switch(true) {

    case (props.primary):
      return 'ocean'

    case (props.positive):
      return 'grass'

    case (props.negative):
      return 'heart'

    default:
      return 'canvas-'
    }
}

const buttonColors = props => color({ ...props, color: getColor(props), bg: getBackground(props) })

export default styled(Component)`
  ${space}
  ${width}
  ${fontSize}
  ${buttonColors}
  border: none;
  display: inline-box;
  box-sizing: border-box;
  cursor: pointer;
  padding: ${ props => props.huge ? '20px' : '10px' };
  opacity: ${ props => props.disabled ? 0.5 : 1 };
  font-size: ${ props => props.huge ? '1.5em' : '1em' };
  text-decoration: none;
`
