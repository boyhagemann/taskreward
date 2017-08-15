import React from 'react'
import styled from 'styled-components'
import Button from './UI/Button'
import { redirectUrl } from '../utils/routes'

const Separator = styled.span`

`

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

      <h2>{ lead.task.name }</h2>
      <p>{ lead.task.description }</p>
      <h4>Reward: {lead.task.reward}</h4>

      <p>
        Share this link on your social media: <strong>{redirectUrl(lead.hash)}</strong>
      </p>

      <div>
        <Button primary huge>View page</Button>
        <Separator> - or - </Separator>
        <Button primary huge>Share it</Button>
        <Separator> - or - </Separator>
        <Button primary huge>Invite people</Button>
      </div>

    </div>

  </div>
) : null
