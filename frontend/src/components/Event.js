import React from 'react'
import Moment from 'react-moment'
import Box from './UI/Box'
import Heading from './UI/Heading'
import Link from './UI/Link'

const name = (user, viewer) => viewer && viewer.id === user.id ? 'You' : user.name

const renderHeading = (event, viewer) => {

  switch(event.__typename) {

    case 'CreatedLead': {
      const { user } = event
      return `${name(user, viewer)} created lead.`
    }

    case 'AssignedReward': {
      const { user, lead, reward, value } = event
      return <span>{name(user, viewer)} assigned <Link to={lead.id}>{name(lead.user, viewer)}</Link> the status <bold>{reward.action}</bold></span>
    }

    case 'ReceivedReward': {
      const { user, lead, reward, depth, cut, value } = event
      return <span>{name(user, viewer)} got a {cut} cut of the original {value} reward because someone {reward.action}.</span>
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
