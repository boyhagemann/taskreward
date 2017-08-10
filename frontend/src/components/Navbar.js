import React from 'react'
import styled from 'styled-components'
import Container from './UI/Container'
import { NavLink } from 'react-router-dom'
import Box from './UI/Box'
import Tab from './UI/Tab'
import defaultTheme from '../themes/default'

const Bar = Container.extend`
  position: fixed;
  width: 100px;
  height: 100%;
  background: ${ ({ theme }) => theme.navbar.background };
  padding: 20px 0;
  margin: 0 auto;
`

const CircleTab = styled(Tab).attrs({
  theme: defaultTheme.navbar
})`
  text-decoration: none;
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 2em;
  vertical-align: middle;
  border-radius: 40px;
  margin-bottom: 20px;
`

export default props => (
  <Bar>
    <CircleTab component={NavLink} exact to={`/`}>H</CircleTab>
    <CircleTab component={NavLink} to={`/tasks`}>T</CircleTab>
    <CircleTab component={NavLink} to={`/account`}>A</CircleTab>
  </Bar>
)
