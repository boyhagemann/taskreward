import React from 'react'
import Moment from 'react-moment'
import Box from './UI/Box'
import Heading from './UI/Heading'
import Link from './UI/Link'
import { valuta } from '../utils/numbers'
import { name } from '../utils/text'
import Message from './UI/Message'

const translateEvent = (event, viewer) => {

  switch(event.__typename) {

    case 'ViewedProfile': {
      const { lead } = event
      return `${name(lead.user, viewer)} viewed page ${lead.profile.name}.`
    }

    case 'PerformedAction': {
      const { lead, action } = event
      return <span>{name(lead.user, viewer)} <bold>{action.name}</bold></span>
    }

    case 'ReceivedReward': {
      const { reward, incentive, lead } = event
      const { actor } = reward
      const { action } = incentive

      return reward.value === incentive.value
        ? <span>{name(lead.user, viewer)} got a full {valuta(reward.value)} reward because <Link to={actor.id}>{name(actor.user)}</Link> {action.name}.</span>
        : <span>{name(lead.user, viewer)} got a {valuta(reward.value)} cut of the original {valuta(incentive.value)} reward because <Link to={actor.id}>{name(actor.user)}</Link> {action.name}.</span>
    }

    default:
      throw new Error(`Event ${event.__typename} is not implemented yet`)
  }
}

export default ({ viewer, event }) => <Message key={event.id} text={translateEvent(event, viewer)} date={event.createdAt} />
