import styled from 'styled-components'

export default styled.button`
  border: none;
  cursor: pointer;
  background: ${ props => props.primary ? '#39f' : '#ddd' };
  color: ${ props => props.primary ? '#fff' : '#666' };
  padding: ${ props => props.huge ? '20px' : '10px' };
  opacity: ${ props => props.disabled ? 0.5 : 1 };
  font-size: ${ props => props.huge ? '1.5em' : '1em' };
`
