import styled from 'styled-components'

export default styled.button`
  border: none;
  background: ${ props => props.primary ? '#39f' : '#ddd' };
  color: ${ props => props.primary ? '#fff' : '#666' };
  padding: 10px;
  opacity: ${ props => props.disabled ? 0.5 : 1 };
`
