import React from 'react'

import { Link } from 'react-router-dom'

export default ({ data: { user } }) => (
  <div>
    { user && user.tasks.map( ({ id, name, description }) =>
      <div key={id}>
        <h2>{ name }</h2>
        <p>{ description }</p>
        <Link to={`/${id}`}>View</Link>
      </div>
      ) }
  </div>
)
