import React from 'react'
import Moment from 'react-moment'
import Box from './UI/Box'
import Heading from './UI/Heading'
import Link from './UI/Link'
import { round } from '../utils/numbers'

const name = (user, viewer) => viewer && viewer.id === user.id ? 'You' : user.name


const renderHeading = (event, viewer) => {

  switch(event.__typename) {

    case 'ViewedProfile': {
      const { lead } = event
      return `${name(lead.user, viewer)} viewed page ${lead.profile.name}.`
    }

    case 'PerformedAction': {
      const { lead, action } = event
      return <span><Link to={lead.id}>{name(lead.user, viewer)}</Link> <bold>{action.name}</bold></span>
    }

    case 'ReceivedReward': {
      const { root, lead, incentive, reward } = event
      return reward.value === incentive.value
        ? <span><Link to={lead.id}>{name(lead.user, viewer)}</Link> got a full {round(reward.value, 2)} reward because someone {incentive.action.name}.</span>
        : <span><Link to={lead.id}>{name(lead.user, viewer)}</Link> got a {round(reward.value, 2)} cut of the original {round(incentive.value, 2)} reward because someone {incentive.action.name}.</span>
    }

    default:
      throw new Error(`Event ${event.__typename} is not implemented yet`)
  }
}

export default ({ viewer, event }) => (
  <Box width={1} bg={`bleech`} p={1} mb={1}>
    <Heading fontSize={2} m={0}>{renderHeading(event, viewer)}</Heading>
    <Box mt={1} fontSize={0} color={'pencil+++'}>
      <Moment fromNow interval={1000}>{event.createdAt}</Moment>
    </Box>
  </Box>
)
