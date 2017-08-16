import React from 'react'
import { Link } from 'react-router-dom'

export default ({ loading, viewer }) => loading
  ? null
  : viewer ?
    (
      <div>
        <div>Welcome, {viewer.name}</div>
        <Link to={`/logout`}>Logout</Link>
      </div>
    )
    : null
