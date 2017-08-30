import React from 'react'
import styled from 'styled-components'
import { Flex } from 'grid-styled'
import { Field } from 'redux-form'
import Button from '../UI/Button'
import FieldWrapper from '../UI/FieldWrapper'
import TextInput from '../UI/TextInput'
import Box from '../UI/Box'

const isRequired = value => value ? undefined : 'This field is required'

const Header = props => <Box width={1} p={2} bg={`night`} color={`bleech`} { ...props } />

const Heading = styled.h3`
  margin: 0;
`

const HeaderActions = styled(props => <Box width={1/12} { ...props } />)`
  text-align: right;
`

const Close = styled.span`
  cursor: pointer;
`


const renderLeadForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Flex direction={['column', 'column', 'row']}>
      <Box width={[1, 1, 2/3]} py={2}>
        <Box width={1}>
          <Box width={[1, 2/5]} pl={2} pr={1}>
            <Field
              component={FieldWrapper}
              field={TextInput}
              label={`First name`}
              type="text"
              name={`firstName`}
              placeholder=""
              validate={[isRequired]}
            />
          </Box>
          <Box width={[1, 1/5]} px={1}>
            <Field
              component={FieldWrapper}
              field={TextInput}
              label={`Middle name`}
              type="text"
              name={`middleName`}
              placeholder=""
            />
          </Box>
          <Box width={[1, 2/5]} pl={1} pr={2}>
            <Field
              component={FieldWrapper}
              field={TextInput}
              label={`Last name`}
              type="text"
              name={`lastName`}
              placeholder=""
              validate={[isRequired]}
            />
          </Box>
          <Box width={1} px={2}>
            <Field
              component={FieldWrapper}
              field={TextInput}
              label={`Email address`}
              type="text"
              name={`email`}
              placeholder="Email address..."
              validate={[isRequired]}
            />
          </Box>
          <Box width={1} px={2}>
            <Field
              component={FieldWrapper}
              label={`Telephone`}
              field={TextInput}
              type="text"
              name={`telephone`}
              placeholder="Telephone..." />
          </Box>
        </Box>
      <Box width={1} px={2}>
        <Button primary onClick={ () => {} }>Recommend this person</Button>
      </Box>
    </Box>
    <Box width={[1, 1, 1/3]} bg={'canvas'} p={2}>
      <Heading>Already invited</Heading>
      <Box width={1} pt={2}>
        <a>Some name</a>
      </Box>
      <Box width={1} pt={2}>
        <a>Other van Person</a>
      </Box>
      <Box width={1} pt={2}>
        <a>Third Person</a>
      </Box>
    </Box>
  </Flex>
  </form>
)

export default ({ handleSubmit, close }) => (
  <div>
    <Header>
      <Box width={11/12}>
        <Heading>Recommend a friend</Heading>
      </Box>
      <HeaderActions>
        <Close onClick={close}>X</Close>
      </HeaderActions>
    </Header>
    { renderLeadForm({ handleSubmit }) }
  </div>
)
