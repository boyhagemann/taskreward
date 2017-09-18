import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Heading from './UI/Heading'
import SubHeading from './UI/SubHeading'
import MaxBox from './UI/MaxBox'
import Box from './UI/Box'
import Header from './UI/Header'
import Button from './UI/Button'
import Moment from 'react-moment'
import { round } from '../utils/numbers'


const Item = props => <Box width={1} bg={`bleech`} mb={2} p={1} { ...props } />
const Content = props => <Box width={[1,5/6]} p={2} { ...props } />

export default ({ loading, rewards = [], total, canRequestPayment }) => loading ? null : (
  <MaxBox>
    <Header
      title={'Rewards'}
      actions={[
        canRequestPayment && <Button component={Link} to={`/payments/request`} positive>Request payment for {round(total, 2)} euro</Button>
      ]}
    />
    { rewards.map(reward => (
      <Item key={reward.id}>
        <SubHeading>{ reward.incentive.name }</SubHeading>
        <p>You got a <strong>{round(reward.value, 2)}</strong> euro reward for completing <strong>{reward.incentive.name}</strong> because you {reward.incentive.action.name}.</p>
        <div>
          <Moment fromNow interval={1000}>{reward.createdAt}</Moment>
        </div>
      </Item>
    )) }
  </MaxBox>
)
