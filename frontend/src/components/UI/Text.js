import styled from 'styled-components'
import { space, fontSize, color } from 'styled-system'

export default styled.p`
  ${space}
  ${fontSize}
  ${color}
  opacity: ${ props => props.opacity || 1};
  line-height: 1.4em;
`
