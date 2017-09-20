import React from 'react'
import SubHeading from './UI/SubHeading'
import MaxBox from './UI/MaxBox'
import Box from './UI/Box'
import Header from './UI/Header'
import Text from './UI/Text'
import Button from './UI/Button'
import Moment from 'react-moment'
import { round } from '../utils/numbers'


const Item = props => <Box width={1} bg={`bleech`} mb={2} p={1} { ...props } />

export default ({ loading, viewer, rewards = [], total, currency, canRequestPayment, createPayment }) => loading ? null : (
  <MaxBox>
    <Header
      title={'Rewards'}
      actions={[
        canRequestPayment
          ? <Button key="request-payment" onClick={ () => createPayment(viewer.id)} positive>Request payment for {round(total, 2)} euro</Button>
          : <Text key="not-enough">{round(total, 2)} {currency} is not enough to request a payment.</Text>
      ]}
    />
    { rewards.length
      ? rewards.map(reward => (
      <Item key={reward.id}>
        <SubHeading>{ reward.incentive.name }</SubHeading>
        <p>You got a <strong>{round(reward.value, 2)}</strong> euro reward for completing <strong>{reward.incentive.name}</strong> because you {reward.incentive.action.name}.</p>
        <div>
          <Moment fromNow interval={1000}>{reward.createdAt}</Moment>
        </div>
      </Item>
    ))
    : (
      <Box width={1}>
        <SubHeading>There are no rewards you here...</SubHeading>
        <Text>
          Check your notifications to be up to date about new rewards.
        </Text>
      </Box>
    )}
  </MaxBox>
)
