import React from 'react'
import { Link } from 'react-router-dom'
import SubHeading from './UI/SubHeading'
import MaxBox from './UI/MaxBox'
import Box from './UI/Box'
import Header from './UI/Header'
import Text from './UI/Text'
import Button from './UI/Button'
import Moment from 'react-moment'
import Message from './UI/Message'
import { round } from '../utils/numbers'

const Item = props => <Box width={1} bg={`bleech`} mb={2} p={1} { ...props } />

const translatePayment = payment => <Text m={0}>You requested a payment for the sum of <strong>{round(payment.value, 2)}</strong> {payment.currency}.</Text>

export default ({ loading, payments = [] }) => loading ? null : (
  <MaxBox>
    <Header
      title={'Payments'}
    />
  { payments.length
      ? payments.map(payment => (
      <Message
        key={payment.id}
        text={translatePayment(payment)}
        date={payment.createdAt}
        actions={<Button component={Link} to={`/my/payments/${payment.id}`}>Details</Button>}
      />
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
