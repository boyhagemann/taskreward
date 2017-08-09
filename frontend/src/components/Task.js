import React from 'react'
import { Route } from 'react-router-dom'
import TaskDashboard from './TaskDashboard'
import TaskProperties from './TaskProperties'
import TaskLeads from './TaskLeads'

import Tab from './UI/Tab'

export default ({ handleSubmit, data: { loading, task }}) => !loading && task ? (
  <div>

    <h1>{ task.name}</h1>
    <div>
      <Tab to={`/tasks/${task.id}`}>Dashboard</Tab>
      <Tab to={`/tasks/${task.id}/properties`}>Properties</Tab>
      <Tab to={`/tasks/${task.id}/leads`}>Leads</Tab>
      <Tab to={`/tasks/${task.id}/claims`}>Claims</Tab>
      <Tab to={`/tasks/${task.id}/events`}>Events</Tab>
    </div>

    <Route exact path={`/tasks/${task.id}`} component={ () => <TaskDashboard task={task} />} />
    <Route exact path={`/tasks/${task.id}/properties`} component={ () => <TaskProperties handleSubmit={handleSubmit} task={task} />} />
    <Route exact path={`/tasks/${task.id}/leads`} component={ () => <TaskLeads task={task} />} />

  </div>
) : null
