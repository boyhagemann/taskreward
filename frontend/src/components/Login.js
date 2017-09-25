import React from 'react'
import { Field } from 'redux-form'
import Button from './UI/Button'
import MaxBox from './UI/MaxBox'
import Box from './UI/Box'
import Link from './UI/Link'
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
        <Box bg={`bleech`} p={2}>

            { errors }
            <Field
              component={FieldWrapper}
              field={TextInput}
              type="email"
              name="email"
              label="Email address"
              validate={[isRequired, isEmail]}
              />

            <Field
              component={FieldWrapper}
              field={TextInput}
              type="password"
              name="password"
              label="Password"
              validate={[isRequired]}
              />

            <Box width={1}>
              <Button
                primary
                type="submit"
                disabled={pristine || submitting}
                >Login</Button>
            </Box>
            <Box width={1} mt={3}>
              <Link to={``}>Not an account yet?</Link>
              <Box color={`canvas-`} mx={2}>|</Box>
              <Link to={``}>Forgot password?</Link>
            </Box>

        </Box>
    </MaxBox>
  </form>
)
