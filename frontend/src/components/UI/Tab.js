import React from 'react'
import styled from 'styled-components'
import { space, width, fontSize, color, removeProps } from 'styled-system'
import { NavLink } from 'react-router-dom'

const colorActive = props => color({ ...props, color: props.activeColor, bg: props.activeBg })

const Tab = ({ component: Component = NavLink, activeColor, activeBg, ...props }) => {

  return <Component { ...removeProps(props) } />
}

export default styled(Tab)`
  display: inline-block;
  margin-right: 3px;
  padding: 10px;
  text-decoration: none;
  ${space}
  ${width}
  ${fontSize}
  ${color}

  &.active {
    ${colorActive}
  }
`
