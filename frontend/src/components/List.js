import React from 'react'
import ListItem from './ListItem'

export default ({ data: { tasks = [] } }) => (
  <div>
    { tasks.map(ListItem) }
  </div>
)
