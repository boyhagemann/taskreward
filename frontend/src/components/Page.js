import React from 'react'
import styled from 'styled-components'
import { Field, FieldArray } from 'redux-form'
import FieldWrapper from './UI/FieldWrapper'
import TextInput from './UI/TextInput'
import TextArea from './UI/TextArea'
import Heading from './UI/Heading'
import Button from './UI/Button'
import Container from './UI/Container'
import Box from './UI/Box'
import RewardForm from './RewardForm'

const Actions = styled(Box)`
  > ${Button} {
    margin-right: 10px;
  }
`

export default ({ handleSubmit, loading, profile }) => loading ? null : (

  <Container>

    <Box>
      <h1>{ profile.name }</h1>
      <p>{ profile.description }</p>
    </Box>

    <Box>
      { profile.rewards.map( reward => (
        <Box>
          <h2>{ reward.name }</h2>
          <p>{ reward.description }</p>
          <div>Reward: { reward.value } Euro</div>
        </Box>
      )) }
    </Box>

    <Box>
      <Button primary>Yes I am interested</Button>
      <Button positive>Share this page (and get 10%)</Button>
      <Button positive>Share this page (and get 10%)</Button>
    </Box>

  </Container>

)
