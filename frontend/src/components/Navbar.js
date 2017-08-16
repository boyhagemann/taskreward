import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Container from './UI/Container'
import { NavLink } from 'react-router-dom'
import Tab from './UI/Tab'
import ProfileContainer from './ProfileContainer'
import defaultTheme from '../themes/default'

const Bar = Container.extend`
  position: fixed;
  width: 100px;
  height: 100%;
  background: ${ ({ theme }) => theme.navbar.background };
  padding: 20px 0;
  margin: 0 auto;
`

const CircleTab = styled(Tab)`
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
  <ThemeProvider theme={defaultTheme.navbar}>
    <Bar>
      <CircleTab component={NavLink} exact to={`/`}>H</CircleTab>
      <CircleTab component={NavLink} to={`/tasks`}>T</CircleTab>
      <CircleTab component={NavLink} to={`/account`}>A</CircleTab>
      <ProfileContainer />
    </Bar>
  </ThemeProvider>
)
