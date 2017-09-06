import React from 'react'
import moment from 'moment'
import Box from './UI/Box'
import Heading from './UI/Heading'

const renderHeading = props => {

  switch(props.__typename) {

    case 'CreatedLead': {
      const { user } = props
      return `${user.name} created lead.`
    }

    case 'AssignedReward': {
      const { user, lead, reward, value } = props
      return `${user.name} rewarded ${lead.user.name} with ${value} for accomplishing reward ${reward.name}.`
    }

  }
}

export default props => (
  <Box key={props.id} width={1} bg={`bleech`} p={1} mb={1}>
    <Heading fontSize={2} m={0}>{renderHeading(props)}</Heading>
    <Box mt={1} fontSize={0} color={'pencil+++'}>{ moment(props.createdAt).fromNow() }</Box>
  </Box>
)
