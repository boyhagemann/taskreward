import React from 'react'
import styled from 'styled-components'
import { space, width, fontSize, color, removeProps } from 'styled-system'
import Link from './Link'
import { NavLink } from 'react-router-dom'

const colorActive = props => color({ ...props, color: props.activeColor, bg: props.activeBg })
const borderActive = props => color({ ...props, color: props.activeBorder })

const Tab = ({ component: Component = NavLink, activeColor, activeBg, activeBorder, ...props }) => {
  return <Component { ...removeProps(props) } />
}

const StyledTab = styled(Tab)`
  display: inline-block;
  margin-right: 3px;
  text-decoration: none;
  ${space}
  ${width}
  ${fontSize}
  ${color}

  &.active {
    ${colorActive}
    ${ props =>  props.activeBorder && `border-bottom: 3px solid ${ borderActive(props).color };` }
  }
`

export default props => <StyledTab p={2} color={`pencil++++`} activeColor={`night`} { ...props } />
