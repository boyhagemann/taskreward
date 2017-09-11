import React from 'react'
import styled from 'styled-components'
import Button from '../UI/Button'
import Box from '../UI/Box'
import Heading from '../UI/Heading'


export default ({ loading, profile, assignIncentive, close }) => loading ? null : (
  <Box width={1}>
    <Heading>Assign incentive</Heading>
    { profile.incentives.map( incentive => (
      <Button
        key={incentive.id}
        onClick={ () => {
          assignIncentive(profile.lead.id, incentive.id)
          close()
        } }
      >{ profile.lead.user.name || 'This person' } { incentive.action }</Button>
    ))}
  </Box>
)
