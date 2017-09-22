import React from 'react'
import Box from './Box'
import FieldWrapper from './FieldWrapper'
import Select from './Select'
import Label from './Label'
import { Field } from 'redux-form'

export default ({ name, ...props }) => (
  <Box width={1} { ...props }>
    <Label>Date of birth</Label>
    <Field
      component={FieldWrapper}
      field={Select}
      name={`${name}.year`}
      wrapper={{
        width: 1/3,
        pr: 1
      }}
    >
      <option>Year...</option>
      <option value="1999">1900</option>
    </Field>
    <Field
      component={FieldWrapper}
      field={Select}
      name={`${name}.month`}
      wrapper={{
        width: 1/3,
        pr: 1
      }}
    >
      <option>Month...</option>
      <option value="1">January</option>
    </Field>
    <Field
      component={FieldWrapper}
      field={Select}
      name={`${name}.day`}
      wrapper={{
        width: 1/3
      }}
    >
      <option>Day...</option>
      <option value="1">1</option>
    </Field>
  </Box>
)
