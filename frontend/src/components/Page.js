import React from 'react'
import styled from 'styled-components'
import { space, fontSize, color } from 'styled-system'
import { Field, FieldArray } from 'redux-form'
import { Link } from 'react-router-dom'
import TextInput from './UI/TextInput'
import Text from './UI/Text'
import Heading from './UI/Heading'
import SubHeading from './UI/SubHeading'
import Button from './UI/Button'
import MaxBox from './UI/MaxBox'
import Box from './UI/Box'
import Card from './UI/Card'

import background from '../assets/images/bg.jpg'

const Description = props => <Text { ...props } />

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

const VisualAction = styled(Box)`
  text-align: right;
`

const Actions = styled(props => (
  <Box { ...props } width={1} p={1} bg={`night`} c={`bleech`} pb={200} />
))`
  text-align: center;
`

const renderLeadForm = ({ fields }) => (
  <Box width={[1, 1/2]}>
    { fields.map( (name, index) => (
      <Box key={index} width={1}>
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
    <Box width={1}>
      <Button primary huge onClick={ () => fields.push() }>Add a friend (or yourself)</Button>
    </Box>
  </Box>
)

export default ({ handleSubmit, loading, profile, action, size }) => loading ? null : (
  <Box width={1}>
    { console.log(size) }
    <Visual>
      <VisualText color={`bleech`}>
        <MaxBox>
          <Box width={[1, 3/5]}>
            <Heading fontSize={7}>{ profile.name }</Heading>
          </Box>

          <VisualAction width={[1, 2/5]}>
            <Button mt={3} primary huge>
              <Text m={0}>Recommend a friend</Text>
              <Text m={0} color={`ocean+++`} fontSize={1}>You will be rewarded!</Text>
            </Button>
          </VisualAction>
        </MaxBox>
      </VisualText>
    </Visual>


    <MaxBox>
        <Description fontSize={3}>{ profile.description }</Description>
    </MaxBox>

    <MaxBox>
      { profile.rewards.map( reward => (
        <Box key={reward.id} mt={2} pr={3} pb={4} width={[1, 1/2, 1/3]}>
          <Card key={reward.name} bg={`bleech`} width={1}>
            <SubHeading m={0} p={2} fontSize={5}>{ reward.name }</SubHeading>
            <Text px={2}>{ reward.description }</Text>
            <Box p={2} bg={`love`} color={`bleech`} width={1} fontSize={3}>Reward: { reward.value } Euro</Box>
          </Card>
        </Box>
      )) }
    </MaxBox>

    <Actions>
      <MaxBox>

          <Box width={[1]} p={1}>
            <SubHeading fontSize={6} color={`bleech`}>Let us know who is interested...</SubHeading>
            <Description>Tell here about the reward...</Description>
            <FieldArray
              component={renderLeadForm}
              name={`leads`}
              />
          </Box>

          <Box width={[1]} p={1}>
            <SubHeading fontSize={5} color={`bleech`}>...or share this page</SubHeading>
            <Description>Tell here about the reward (10%) and show how you can share this page...</Description>
          </Box>

      </MaxBox>
    </Actions>

  </Box>
)
