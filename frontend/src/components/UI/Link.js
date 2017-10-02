import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { space, width, fontSize, color, removeProps } from 'styled-system'

const colorHover = props => color({ ...props, color: props.hoverColor })

const PureLink = ({ hoverColor, ...props }) => <Link { ...removeProps(props) } />

const StyledLink = styled(PureLink)`
  display: inline-block;
  vertical-align: top;
  box-sizing: border-box;
  text-decoration: none;
  opacity: ${props => props.opacity};
  ${space}
  ${width}
  ${fontSize}
  ${color}

  &:hover {
    ${colorHover}
    opacity: 1;
  }
`

export default props => <StyledLink color={`calm`} { ...props } />
