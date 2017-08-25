import React from 'react'
import styled from 'styled-components'
import { space, fontSize, color } from 'styled-system'
import { Field, FieldArray } from 'redux-form'
import { Link } from 'react-router-dom'
import TextInput from './UI/TextInput'
import Heading from './UI/Heading'
import SubHeading from './UI/SubHeading'
import Button from './UI/Button'
import MaxBox from './UI/MaxBox'
import Box from './UI/Box'

import background from '../assets/images/bg.jpg'

const Description = styled.p`
  ${fontSize}
`

const renderField = ({ input, placeholder, meta }) => (
  <TextInput { ...input } placeholder={placeholder} />
)

const Visual = styled(props => (
  <Box { ...props } width={1} />
))`
  position: relative;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  height: 500px;
`

const VisualText = styled(props => (
  <Box { ...props } width={1} />
))`
  background: rgba(0,0,0,0.3);
  position: absolute;
  bottom: 0;
`

const Rewards = props => (
  <Box { ...props } width={1} py={3} />
)

const Actions = styled(props => (
  <Box { ...props } width={1} p={1} bg={`night`} c={`bleech`} pb={200} />
))`
  text-align: center;
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

export default ({ handleSubmit, loading, profile, action }) => loading ? null : (
  <Box width={1}>
    <Visual>
      <VisualText color={`bleech`}>
        <MaxBox>
          <Heading fontSize={7}>{ profile.name }</Heading>
        </MaxBox>
      </VisualText>
    </Visual>


    <Rewards>
      <MaxBox>
        <Description fontSize={3}>{ profile.description }</Description>
        { profile.rewards.map( reward => (
          <Box key={reward.name} width={[1, 1/2, 1/3]} p={1}>
            <SubHeading m={0} fontSize={5}>{ reward.name }</SubHeading>
            <p>{ reward.description }</p>
            <Box width={1} fontSize={3}>Reward: { reward.value } Euro</Box>
          </Box>
        )) }
      </MaxBox>
    </Rewards>

    <Actions>
      <MaxBox>

          <Box width={[1]} p={1}>
            <SubHeading color={`bleech`}>Let us know who is interested...</SubHeading>
            <Description>Tell here about the reward...</Description>
            <FieldArray
              component={renderLeadForm}
              name={`leads`}
              />
          </Box>

          <Box width={[1]} p={1}>
            <SubHeading color={`bleech`}>...or share this page</SubHeading>
            <Description>Tell here about the reward (10%) and show how you can share this page...</Description>
          </Box>

      </MaxBox>
    </Actions>

  </Box>
)
