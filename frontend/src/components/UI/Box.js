import styled from 'styled-components'

export default styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: ${ ({ width = 1 }) => width <= 1 ? (width * 100) + '%' : width + 'px' };
  max-width: ${ ({ max }) => max ? max + 'px' : null };
  text-align: left;
  vertical-align: top;
`
