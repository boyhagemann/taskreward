import React from 'react'
import { Link } from 'react-router-dom'
import Card from './UI/Card'

export default ({ task }) => (
  <Card>

      { task.leads.map(lead => (

        <div key={lead.id}>
          <p>Sent to { lead.to.name }</p>
          <Link to={`/leads/${lead.id}`}>View lead page</Link>
        </div>
      )) }

  </Card>
)
