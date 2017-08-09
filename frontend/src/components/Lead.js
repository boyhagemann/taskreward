import React from 'react'
import Button from './UI/Button'

export default ({ data: { loading, lead } }) => !loading ? (
  <div>
    <div>
      { console.log(lead) }

      <h1>Hey {lead.to.name}, {lead.from.name} shared this with you...</h1>
      <p></p>

      <h2>{ lead.task.name }</h2>
      <p>{ lead.task.description }</p>
      <h4>Reward: {lead.task.reward}</h4>

      <div>
        <Button primary>View page</Button>
        <Button primary>..or share it</Button>
      </div>

    </div>

  </div>
) : null
