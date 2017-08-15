import React from 'react'
import Button from './UI/Button'
import { Link } from 'react-router-dom'

export default ({ task }) => (
  <div>
    Dashboard

    <Button component={Link} to={`/redirect/${task.lead.hash}`}>View redirect link</Button>
  </div>
)
