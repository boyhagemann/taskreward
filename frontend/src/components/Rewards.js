import React from 'react'
import SubHeading from './UI/SubHeading'
import MaxBox from './UI/MaxBox'
import Box from './UI/Box'
import Header from './UI/Header'
import Text from './UI/Text'
import Message from './UI/Message'
import Button from './UI/Button'
import Moment from 'react-moment'
import { valuta } from '../utils/numbers'

export default ({ loading, viewer, rewards = [], total, currency, canRequestPayment, createPayment }) => loading ? null : (
  <MaxBox>
    <Header
      title={'Rewards'}
      actions={[
        canRequestPayment
          ? <Button key="request-payment" onClick={ () => createPayment(viewer.id)} positive>Request payment for {valuta(total)} euro</Button>
          : <Text key="not-enough">{valuta(total)} {currency} is not enough to request a payment.</Text>
      ]}
    />
    { rewards.length
      ? rewards.map(reward => (
      <Message
        icon="reward"
        iconColor={`beach`}
        key={reward.id}
        text={
          <Text m={0}>
            <Text m={0}>For { reward.incentive.name }, you got a <strong>{valuta(reward.value)}</strong> euro reward for completing <strong>{reward.incentive.name}</strong> because you {reward.incentive.action.name}.</Text>
          </Text>
        }
        date={reward.createdAt}
      />
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
