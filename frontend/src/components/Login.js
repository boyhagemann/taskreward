import React from 'react'
import { Field } from 'redux-form'
import TextInput from './UI/TextInput'
import Button from './UI/Button'
import Card from './UI/Card'
import { isRequired, isEmail } from '../utils/validation'

const renderField = ({ input, label, placeholder, type, meta: { touched, error, warning } }) => (
  <TextInput
    { ...input }
    type={type}
    label={label}
    placeholder={placeholder}
    error={touched && error}
    warning={touched && warning}
  />
)

export default ({ handleSubmit, errors, pristine, submitting }) => (
  <form
    onSubmit={handleSubmit}
  >
    <Card>
      <div>
        { errors }
        <Field
          component={renderField}
          type="email"
          name="email"
          placeholder="Your email address..."
          validate={[isRequired, isEmail]}
        />
      </div>
      <div>
        <Field
          component={renderField}
          type="password"
          name="password"
          placeholder="Enter your password..."
          validate={[isRequired]}
        />
      </div>
      <div>
        <Button
          primary
          type="submit"
           disabled={pristine || submitting}
        >Login</Button>
      </div>
    </Card>
  </form>
)
