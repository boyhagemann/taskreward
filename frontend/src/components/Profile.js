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

const Reward = styled.div`
  margin-bottom: 30px;
  padding: 20px;
  background: ${ ({ theme }) => theme.profile.reward.background };
`

const renderRewards = ({ fields }) => (
  <Box>
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

    <Container>

        <Box>

          <Heading>Profile</Heading>
          <Field
            name="name"
            label="Name"
            component={ props => <FieldWrapper component={TextInput} {...props} />}
            description={`
              Give your reward a nice and catchy name.
              This name will be visible for everyone.
            `}
            />

          <Field
            name="description"
            label="Description"
            rows={10}
            component={ props => <FieldWrapper component={TextArea} {...props} />}
            description={`
              This is the main text everyone will see.
              Tell them something that excites them about this reward.
              It will help get people moving.
            `}
            />

            <Button primary huge type="submit">Save</Button>


          <Heading>Rewards</Heading>
          <FieldArray
            name={`rewards`}
            component={renderRewards}
          />

          <Button primary huge type="submit">Save</Button>

        </Box>

    </Container>

  </form>
)}
