import React from 'react'
import styled from 'styled-components'
import { Route } from 'react-router-dom'
import TaskDashboard from './TaskDashboard'
import TaskProperties from './TaskProperties'
import TaskLeads from './TaskLeads'
import Tab from './UI/Tab'
import Container from './UI/Container'
import Box from './UI/Box'
import { NavLink } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import defaultTheme from '../themes/default'

const Header = Container.extend`
  background: ${ ({ theme }) => theme.header.background };
  color: ${ ({ theme }) => theme.header.color };
`

const HeaderBox = Box.extend`
  padding: 0 20px;
`

const Heading = styled.h1``

const Content = Box.extend`
  padding: 30px 20px;
`

const tabs = [
  { to: task => `/tasks/${task.id}`, exact: true, label: 'Dashboard'},
  { to: task => `/tasks/${task.id}/properties`, label: 'Properties'},
  { to: task => `/tasks/${task.id}/leads`, label: 'Leads'},
  { to: task => `/tasks/${task.id}/claims`, label: 'Claims'},
  { to: task => `/tasks/${task.id}/events`, label: 'Events'},
]

export default ({ handleSubmit, data: { loading, task }}) => !loading && task ? (
  <Box>
    <Header>
      <HeaderBox max={1200}>
        <Heading>{task.name}</Heading>
        { tabs.map( ({ to, exact, label }) => (
          <ThemeProvider key={to} theme={defaultTheme.header}>
            <Tab component={NavLink} exact={exact} to={to(task)}>{label}</Tab>
          </ThemeProvider>
        ))}
      </HeaderBox>
    </Header>

    <Content>
      <Route exact path={`/tasks/${task.id}`} component={ () => <TaskDashboard task={task} />} />
      <Route exact path={`/tasks/${task.id}/properties`} component={ () => <TaskProperties handleSubmit={handleSubmit} task={task} />} />
      <Route exact path={`/tasks/${task.id}/leads`} component={ () => <TaskLeads task={task} />} />
    </Content>

  </Box>
) : null
