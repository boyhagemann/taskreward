import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Heading from './UI/Heading'
import SubHeading from './UI/SubHeading'
import MaxBox from './UI/MaxBox'
import Box from './UI/Box'
import Button from './UI/Button'
import Moment from 'react-moment'


const Item = props => <Box width={1} bg={`bleech`} mb={2} { ...props } />
const Content = props => <Box width={[1,5/6]} p={2} { ...props } />
const Actions = props => <Box width={1} { ...props } />

export default ({ loading, rewards = [] }) => loading ? null : (
  <MaxBox>
    <Heading>Rewards</Heading>
    { rewards.map(event => (
      <Item key={event.id}>
        <SubHeading>{ event.reward.name }</SubHeading>
        <p>You got a <strong>{event.cut}</strong> euro reward for completing <strong>{event.reward.name}</strong> because you {event.reward.action}.</p>
        <div>
          <Moment fromNow interval={1000}>{event.createdAt}</Moment>
        </div>
        <Actions>
        </Actions>
      </Item>
    )) }
  </MaxBox>
)
