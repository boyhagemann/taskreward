import React from 'react'
import styled from 'styled-components'

const Component = ({ component: Component = 'button', primary, positive, negative, huge, ...props}) => {
  return <Component {...props} />
}

export default styled(Component)`
  border: none;
  display: inline-box;
  box-sizing: border-box;
  cursor: pointer;
  background: ${ props => {
    switch(true) {

      case (props.primary):
        return props.theme.button.primary.background || '#06c'

      case (props.positive):
        return props.theme.button.positive.background || 'green'

      case (props.negative):
        return props.theme.button.negative.background || 'red'

      default:
        return props.theme.button.default.background || '#ddd'

      }
  } };
  color: ${ props => {
    switch(true) {

      case (props.primary):
        return props.theme.button.primary.color || '#fff'

      case (props.positive):
        return props.theme.button.positive.color || '#fff'

      case (props.negative):
        return props.theme.button.negative.color || '#fff'

      default:
        return props.theme.button.default.color || '#666'

      }
  } };
  padding: ${ props => props.huge ? '20px' : '10px' };
  opacity: ${ props => props.disabled ? 0.5 : 1 };
  font-size: ${ props => props.huge ? '1.5em' : '1em' };
  text-decoration: none;
`
