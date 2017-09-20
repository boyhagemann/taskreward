import React from 'react'
import { Link } from 'react-router-dom'
import MaxBox from './UI/MaxBox'
import Box from './UI/Box'
import Header from './UI/Header'
import Text from './UI/Text'
import Button from './UI/Button'
import Moment from 'react-moment'
import { round } from '../utils/numbers'

export default ({ loading, payment }) => loading ? null : (
  <MaxBox>
    <Header
      title={<Moment>{payment.createdAt}</Moment>}
    />
    <Box width={1}>
      Value: {round(payment.value, 2)} {payment.currency}
    </Box>
    <Box width={1}>
      { payment.rewards.map( reward => (
        <Box key={reward.id} width={1} bg={`bleech`} p={1} mb={1}>
          <Text>
            You got a {round(reward.value, 2)} {reward.currency} cut because someone {reward.incentive.action.name}
          </Text>
          <Box width={1}>
            <Button component={Link} to={`/p/${reward.lead.hash}`}>View page</Button>
          </Box>
        </Box>
      ) )}
    </Box>

  </MaxBox>
)
