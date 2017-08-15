import React from 'react'
import Button from './UI/Button'

const getUserName = lead => lead.parent
  ? lead.parent.user.name
  : lead.task.owner.name

export default ({ data: { loading, lead } }) => !loading ? (
  <div>
    <div>

      { lead.user && lead.user.name
        ? <h1>Hey {lead.user.name}, {getUserName(lead)} shared this with you...</h1>
        : <h1>Hey, {getUserName(lead)}</h1>
      }
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
