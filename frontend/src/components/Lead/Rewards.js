import React from 'react'
import Box from '../UI/Box'
import Button from '../UI/Button'
import Heading from '../UI/Heading'

export default ({ profile, reward, assignReward }) => (
  <Box width={1}>
    <Heading>Reward</Heading>
    { profile.rewards.map( reward => (
      <Button key={reward.id} onClick={ () => assignReward(profile.lead.id, reward.id) } type="button">Assign { reward.name }</Button>
    ))}
  </Box>
)
