import React from 'react'

import { Link } from 'react-router-dom'

export default ({ data: { tasks = [] } }) => (
  <div>
    { tasks.map( ({ id, name, description, owner, leads }) =>
      <div key={id}>
        <h2>{ name }</h2>
        <p>{ description }</p>
        <div>Owned by { owner.email }</div>
        <Link to={`/${id}`}>View</Link>
        <div>
          <h4>Leads</h4>
          { leads.map( ({ from, to }) => (
            <div>
              From {from.email} To {to.email}
            </div>
          ) )}
        </div>
      </div>
      ) }
  </div>
)
