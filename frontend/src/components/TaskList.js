import React from 'react'
import TaskListItem from './TaskListItem'
import Container from './UI/Container'
import Box from './UI/Box'

export default ({ data: { tasks = [] } }) => (
  <Container>
    <Box max={1200}>
      { tasks.map(TaskListItem) }
    </Box>
  </Container>
)
