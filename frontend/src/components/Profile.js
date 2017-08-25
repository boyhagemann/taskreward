import React from 'react'
import styled from 'styled-components'
import { Field, FieldArray } from 'redux-form'
import FieldWrapper from './UI/FieldWrapper'
import TextInput from './UI/TextInput'
import TextArea from './UI/TextArea'
import Heading from './UI/Heading'
import Button from './UI/Button'
import Box from './UI/Box'
import MaxBox from './UI/MaxBox'
import RewardForm from './RewardForm'

const Reward = props => <Box { ...props } bg={`canvas-`} p={2} mb={2} />

const renderRewards = ({ fields }) => (
  <Box width={1}>
    { fields.map( (reward, index) => (
      <Reward key={index}>
        <RewardForm name={reward} remove={ () => fields.remove(index) } />
      </Reward>
    )) }
    <Button positive onClick={ () => fields.push() }>Add a reward</Button>
  </Box>
)

export default ({ handleSubmit, loading }) => {

  return (
  <form onSubmit={handleSubmit}>

    <MaxBox p={1}>

      <Box width={[1, 2/3]}>
        <Heading fontSize={5}>Profile</Heading>
        <Field
          name="name"
          label="Name"
          component={FieldWrapper}
          field={TextInput}
          width={1}
          description={`
            Give your reward a nice and catchy name.
            This name will be visible for everyone.
          `}
          />

        <Field
          name="description"
          label="Description"
          rows={10}
          component={FieldWrapper}
          field={TextArea}
          description={`
            This is the main text everyone will see.
            Tell them something that excites them about this reward.
            It will help get people moving.
          `}
          />

        <Button primary huge type="submit">Save</Button>
      </Box>
    </MaxBox>

    <MaxBox p={1}>
      <Box width={[1, 2/3]}>
        <Heading>Rewards</Heading>
        <FieldArray
          name={`rewards`}
          component={renderRewards}
        />

        <Button primary huge type="submit">Save</Button>
      </Box>

    </MaxBox>

  </form>
)}
