import React from 'react'
import styled from 'styled-components'
import { space, width, fontSize, color } from 'styled-system'
import { NavLink } from 'react-router-dom'

const activeColor = props => color({ ...props, color: props.activeColor })

export default styled( ({ activeColor, ...navProps }) => <NavLink { ...navProps } />)`
  display: inline-block;
  margin-right: 3px;
  padding: 10px;
  text-decoration: none;
  ${space}
  ${width}
  ${fontSize}
  ${color}

  &.active {
    ${activeColor}
  }
`
