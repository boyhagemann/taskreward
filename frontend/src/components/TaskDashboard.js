import React from 'react'
import Button from './UI/Button'
import { Link } from 'react-router-dom'

export default ({ handleSubmit, task }) => (
  <div>
    Dashboard

    <Button component={Link} to={`/tasks/${task.id}/redirect`}>View redirect link</Button>
  </div>
)
