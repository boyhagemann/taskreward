import React from 'react'
import styled from 'styled-components'
import { space, width, fontSize, color } from 'styled-system'
import { NavLink } from 'react-router-dom'

const colorActive = props => color({ ...props, color: props.activeColor, bg: props.activeBg })

export default styled( ({ component: Component = NavLink, ...navProps }) => <Component { ...navProps } />)`
  display: inline-block;
  margin-right: 3px;
  padding: 10px;
  text-decoration: none;
  ${space}
  ${width}
  ${fontSize}
  ${color}

  ${ props => {
    console.log('Color', colorActive(props))
  }}
  &.active {
    ${colorActive}
  }
`
