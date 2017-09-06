import React from 'react'
import styled from 'styled-components'
import Button from '../UI/Button'
import Box from '../UI/Box'
import Heading from '../UI/Heading'


export default ({ profile, assignReward, close }) => (
  <Box width={1}>
    <Heading>Reward</Heading>
    { profile.rewards.map( reward => (
      <Button
        key={reward.id}
        onClick={ () => {
          assignReward(profile.lead.id, reward.id)
          close()
        } }
      >Assign { reward.name }</Button>
    ))}
  </Box>
)
