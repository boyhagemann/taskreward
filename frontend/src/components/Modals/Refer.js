import React from 'react'
import { Field } from 'redux-form'
import Button from '../UI/Button'
import FieldWrapper from '../UI/FieldWrapper'
import TextInput from '../UI/TextInput'
import Box from '../UI/Box'

const renderLeadForm = () => (
  <form>
    <Box width={[1]} p={2}>
        <Box width={1}>
          <Box width={1}>
            <Field
              component={FieldWrapper}
              field={TextInput}
              label={`Email address`}
              type="text"
              name={`email`}
              placeholder="Email address..." />
          </Box>
          <Box width={1}>
            <Field
              component={FieldWrapper}
              label={`Telephone`}
              field={TextInput}
              type="text"
              name={`telephone`}
              placeholder="Telephone..." />
          </Box>
        </Box>
      <Box width={1}>
        <Button primary onClick={ () => {} }>Add</Button>
      </Box>
    </Box>
  </form>
)

export default ({ close }) => (
  <div>
    { renderLeadForm() }
    <Button type="button" onClick={close}>Close</Button>
  </div>
)
