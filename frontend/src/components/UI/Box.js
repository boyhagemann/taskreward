// import { Grid } from 'grid-styled'
import styled from 'styled-components'
import { space, width, fontSize, color, responsiveStyle } from 'styled-system'

const textAlign = responsiveStyle('text-align', 'textAlign')


export default styled.div`
  display: inline-block;
  vertical-align: top;
  box-sizing: border-box;
  opacity: ${props => props.opacity};
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${textAlign}
`
