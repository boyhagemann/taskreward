import React from 'react'
import TaskListItem from './TaskListItem'

export default ({ data: { tasks = [] } }) => (
  <div>
    { tasks.map(TaskListItem) }
  </div>
)
