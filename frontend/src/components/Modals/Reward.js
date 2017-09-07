import React from 'react'
import styled from 'styled-components'
import Button from '../UI/Button'
import Box from '../UI/Box'
import Heading from '../UI/Heading'


export default ({ loading, profile, assignReward, close }) => loading ? null : (
  <Box width={1}>
    <Heading>Reward</Heading>
    { profile.rewards.map( reward => (
      <Button
        key={reward.id}
        onClick={ () => {
          assignReward(profile.lead.id, reward.id)
          close()
        } }
      >{ profile.lead.user.name || 'This person' } { reward.action }</Button>
    ))}
  </Box>
)
