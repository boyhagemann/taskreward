import React from 'react'
import { Link } from 'react-router-dom'
import SubHeading from './UI/SubHeading'
import MaxBox from './UI/MaxBox'
import Box from './UI/Box'
import Header from './UI/Header'
import Text from './UI/Text'
import Button from './UI/Button'
import Moment from 'react-moment'
import { round } from '../utils/numbers'

const Item = props => <Box width={1} bg={`bleech`} mb={2} p={1} { ...props } />

export default ({ loading, payments = [] }) => loading ? null : (
  <MaxBox>
    <Header
      title={'Payments'}
    />
  { payments.length
      ? payments.map(payment => (
      <Item key={payment.id}>
        <Text>You requested a payment for the sum of <strong>{round(payment.value, 2)}</strong> {payment.currency}. </Text>
        <Text fontSize={1} color={`pencil++++`}>
          <Moment fromNow interval={1000}>{payment.createdAt}</Moment>
        </Text>
        <Button component={Link} to={`/payments/${payment.id}`}>Details</Button>
      </Item>
    ))
    : (
      <Box width={1}>
        <SubHeading>There are no payments here...</SubHeading>
        <Text>
          This means you have not been rewarded yet.
        </Text>
      </Box>
    )}
  </MaxBox>
)
