import React from 'react'
import { Link } from 'react-router-dom'
import MaxBox from './UI/MaxBox'
import Box from './UI/Box'
import Header from './UI/Header'
import SubHeading from './UI/SubHeading'
import Text from './UI/Text'
import Button from './UI/Button'
import Moment from 'react-moment'
import { valuta } from '../utils/numbers'
import { name } from '../utils/text'
import Message from './UI/Message'

const translateReward = (reward, viewer) => `You got a ${valuta(reward.value)} ${reward.currency} cut because ${ name(reward.actor.user, viewer) } ${reward.incentive.action.name}`

export default ({ loading, viewer, payment }) => loading ? null : (
  <MaxBox>
    <Header
      title={<Moment>{payment.createdAt}</Moment>}
    />
    <Box width={1}>
      Value: {valuta(payment.value)} {payment.currency}
    </Box>
    <Box width={1}>
      <SubHeading>Rewards</SubHeading>
      { payment.rewards.map( reward => (
        <Message
          key={reward.id}
          text={translateReward(reward, viewer)}
          date={reward.createdAt}
          actions={<Button component={Link} to={`/p/${reward.lead.hash}`}>View page</Button>}
        />
      ) )}
    </Box>

  </MaxBox>
)
