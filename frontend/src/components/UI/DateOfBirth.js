import React from 'react'
import Box from './Box'
import FieldWrapper from './FieldWrapper'
import Select from './Select'
import Label from './Label'
import { Field } from 'redux-form'
import { range, months } from '../../utils/numbers'

export default ({ name, ...props }) => (
  <Box width={1} { ...props }>
    <Label>Date of birth</Label>
    <Field
      component={FieldWrapper}
      field={Select}
      name={`dobYear`}
      wrapper={{
        width: 1/3,
        pr: 1
      }}
    >
      <option>Year...</option>
      { range(1900, 2017).reverse().map(year => <option key={year} value={year}>{year}</option>) }
    </Field>
    <Field
      component={FieldWrapper}
      field={Select}
      name={`dobMonth`}
      wrapper={{
        width: 1/3,
        pr: 1
      }}
    >
      <option>Month...</option>
      { months().map(({ value, label}) => <option key={value} value={value}>{label}</option>) }
    </Field>
    <Field
      component={FieldWrapper}
      field={Select}
      name={`dobDay`}
      wrapper={{
        width: 1/3
      }}
    >
      <option>Day...</option>
      { range(1, 31).map(day => <option key={day} value={day}>{day}</option>) }
    </Field>
  </Box>
)
