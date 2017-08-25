import React from 'react'
import { Field } from 'redux-form'
import Button from './UI/Button'
import MaxBox from './UI/MaxBox'
import Card from './UI/Card'
import { isRequired, isEmail } from '../utils/validation'
import Heading from './UI/Heading'
import TextInput from './UI/TextInput'
import FieldWrapper from './UI/FieldWrapper'


// const FieldWrapper = (field) => {
//   return <input type="text" {...field.input} />
// }

export default ({ handleSubmit, errors, pristine, submitting }) => (
  <form
    onSubmit={handleSubmit}
  >
      <MaxBox>
        <Heading>Login</Heading>
        <Card>
          <div>
            { errors }
            <Field
              component={FieldWrapper}
              field={TextInput}
              type="email"
              name="email"
              validate={[isRequired, isEmail]}
              />
          </div>
          <div>
            <Field
              component={FieldWrapper}
              field={TextInput}
              type="password"
              name="password"
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
    </MaxBox>
  </form>
)
