import React from 'react'
import styled from 'styled-components'
import { Field, FieldArray } from 'redux-form'
import TextInput from './UI/TextInput'
import Heading from './UI/Heading'
import SubHeading from './UI/SubHeading'
import Button from './UI/Button'
import { Container } from './UI/Container'
import MaxBox from './UI/MaxBox'
import Box from './UI/Box'

const Description = styled.p``

const renderField = ({ input, placeholder, meta }) => (
  <TextInput { ...input } placeholder={placeholder} />
)

const Visual = Container.extend`
  background: ${ ({ theme }) => theme.page.visual.background };
  color: ${ ({ theme }) => theme.page.visual.color };
  padding-top: 200px;
`

const Rewards = Container.extend`
  background: ${ ({ theme }) => theme.page.rewards.background };
  padding-bottom: 40px;
`

const Actions = Container.extend`
  background: ${ ({ theme }) => theme.page.actions.background };
  padding-bottom: 40px;
`

const renderLeadForm = ({ fields }) => (
  <Box>
    { fields.map( (name, index) => (
      <Box key={index}>
        <Box width={1/2}>
          <Field
            component={renderField}
            type="text"
            name={`${name}.email`}
            placeholder="Email address..." />
        </Box>
        <Box width={1/2}>
          <Field
            component={renderField}
            type="text"
            name={`${name}.telephone`}
            placeholder="Telephone..." />
        </Box>
      </Box>
    )) }
    <Box>
      <Button positive onClick={ () => fields.push() }>Add a friend</Button>
    </Box>
  </Box>
)

export default ({ handleSubmit, loading, profile }) => loading ? null : (
  <div>
    <Visual>
      <MaxBox>
        <Heading>{ profile.name }</Heading>
        <Description>{ profile.description }</Description>
      </MaxBox>
    </Visual>

    <Rewards>
      <MaxBox>
        <Box>
          { profile.rewards.map( reward => (
            <Box key={reward.name}>
              <SubHeading>{ reward.name }</SubHeading>
              <p>{ reward.description }</p>
              <div>Reward: { reward.value } Euro</div>
            </Box>
          )) }
        </Box>
      </MaxBox>
    </Rewards>

    <Actions>
      <MaxBox>
        <Box width={1/3}>
          <SubHeading>Yes I am interested...</SubHeading>
          <Description>Tell here what you can expect or some benifits...</Description>
          <Button primary>Yes, some action</Button>
        </Box>
        <Box width={1/3}>
          <SubHeading>I know someone...</SubHeading>
          <Description>Tell here about the reward...</Description>
          <FieldArray
            component={renderLeadForm}
            name={`leads`}
            />
        </Box>
        <Box width={1/3}>
          <SubHeading>Share this page...</SubHeading>
          <Description>Tell here about the reward (10%) and show how you can share this page...</Description>
        </Box>

      </MaxBox>
    </Actions>
  </div>
)
