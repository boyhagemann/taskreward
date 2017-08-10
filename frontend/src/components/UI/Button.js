import React from 'react'
import styled from 'styled-components'

const Component = ({ component: Component = 'button', primary, huge, ...props}) => {
  return <Component {...props} />
}

export default styled(Component)`
  border: none;
  cursor: pointer;
  background: ${ props => props.primary ? '#39f' : '#ddd' };
  color: ${ props => props.primary ? '#fff' : '#666' };
  padding: ${ props => props.huge ? '20px' : '10px' };
  opacity: ${ props => props.disabled ? 0.5 : 1 };
  font-size: ${ props => props.huge ? '1.5em' : '1em' };
  text-decoration: none;
`
