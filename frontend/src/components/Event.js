import React from 'react'
import moment from 'moment'
import Box from './UI/Box'
import Heading from './UI/Heading'
import Link from './UI/Link'

const renderHeading = props => {

  switch(props.__typename) {

    case 'CreatedLead': {
      const { user } = props
      return `${user.name} created lead.`
    }

    case 'AssignedReward': {
      const { user, lead, reward, value } = props
      return <span>{user.name} rewarded <Link to={lead.id}>{lead.user.name}</Link> with {value} for accomplishing reward {reward.name}</span>
    }

    case 'ReceivedReward': {
      const { user, lead, reward, depth, cut, value } = props
      return <span>{user.name} got a {cut} cut of the original {value} reward because</span>
    }

    default:
      throw new Error(`Event ${props.__typename} is not implemented yet`)
  }
}

export default props => (
  <Box key={`${props.id}-${props.lead && props.lead.id}`} width={1} bg={`bleech`} p={1} mb={1}>
    <Heading fontSize={2} m={0}>{renderHeading(props)}</Heading>
    <Box mt={1} fontSize={0} color={'pencil+++'}>{ moment(props.createdAt).fromNow() }</Box>
  </Box>
)
