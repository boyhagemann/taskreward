import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Heading from './UI/Heading'
import SubHeading from './UI/SubHeading'
import MaxBox from './UI/MaxBox'
import Box from './UI/Box'
import Button from './UI/Button'
import Moment from 'react-moment'
import { round } from '../utils/numbers'


const Item = props => <Box width={1} bg={`bleech`} mb={2} p={1} { ...props } />
const Content = props => <Box width={[1,5/6]} p={2} { ...props } />
const Actions = props => <Box width={1} { ...props } />

export default ({ loading, rewards = [] }) => loading ? null : (
  <MaxBox>
    <Heading>Rewards</Heading>
    { rewards.map(reward => (
      <Item key={reward.id}>
        <SubHeading>{ reward.incentive.name }</SubHeading>
        <p>You got a <strong>{round(reward.value, 2)}</strong> euro reward for completing <strong>{reward.incentive.name}</strong> because you {reward.incentive.action.name}.</p>
        <div>
          <Moment fromNow interval={1000}>{reward.createdAt}</Moment>
        </div>
        <Actions>
        </Actions>
      </Item>
    )) }
  </MaxBox>
)
