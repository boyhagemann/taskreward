import React from 'react'
import styled from 'styled-components'
import { Flex } from 'grid-styled'
import { Field } from 'redux-form'
import Button from '../UI/Button'
import FieldWrapper from '../UI/FieldWrapper'
import TextInput from '../UI/TextInput'
import TextArea from '../UI/TextArea'
import Box from '../UI/Box'
import SubHeading from '../UI/SubHeading'
import Header from './Header'

const isRequired = value => value ? undefined : 'This field is required'

export default ({ handleSubmit, close, lead }) => (
  <div>
    <Header title="Recommend a friend" close={close} />
    <Flex direction={['column', 'column', 'row']}>
      <Box width={[1, 1, 2/3]} py={2}>
        <form onSubmit={handleSubmit}>
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
            <Box width={1} px={2}>
              <Field
                component={FieldWrapper}
                label={`Motivation`}
                field={TextArea}
                type="text"
                name={`motivation`}
                placeholder="Tell us more why this person might be interested..." />
            </Box>
          </Box>
        <Box width={1} px={2}>
          <Button primary onClick={ () => {} }>Recommend this person</Button>
        </Box>
      </form>
    </Box>
    <Box width={[1, 1, 1/3]} bg={'canvas'} p={2}>
      <SubHeading>Already invited</SubHeading>
      { lead && lead.invited.map( invited => (
        <Box key={invited.id} width={1} pt={2}>
          <a>{ invited.user.name }</a>
        </Box>
      ) )}
    </Box>
  </Flex>
  </div>
)
