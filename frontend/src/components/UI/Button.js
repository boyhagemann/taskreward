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
        return props.theme.colors.ocean || '#000'

      case (props.positive):
        return 'green'

      case (props.negative):
        return 'red'

      default:
        return '#ddd'

      }
  } };
  color: ${ props => {
    switch(true) {

      case (props.primary):
        return '#fff'

      case (props.positive):
        return '#fff'

      case (props.negative):
        return '#fff'

      default:
        return '#666'

      }
  } };
  padding: ${ props => props.huge ? '20px' : '10px' };
  opacity: ${ props => props.disabled ? 0.5 : 1 };
  font-size: ${ props => props.huge ? '1.5em' : '1em' };
  text-decoration: none;
`
