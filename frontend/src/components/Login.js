import React from 'react'
import { Field } from 'redux-form'
import TextInput from './UI/TextInput'
import Container from './UI/Container'
import Box from './UI/Box'
import Button from './UI/Button'
import Card from './UI/Card'
import { isRequired, isEmail } from '../utils/validation'
import Heading from './UI/Heading'
import FieldWrapper from './UI/FieldWrapper'

export default ({ handleSubmit, errors, pristine, submitting }) => (
  <form
    onSubmit={handleSubmit}
  >
    <Container>
      <Box max={600}>
        <Heading>Login</Heading>
        <Card>
          <div>
            { errors }
            <Field
              component={ props => <FieldWrapper component={TextInput} { ...props} />}
              type="email"
              name="email"
              placeholder="Your email address..."
              validate={[isRequired, isEmail]}
              />
          </div>
          <div>
            <Field
              component={ props => <FieldWrapper component={TextInput} { ...props} />}
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
      </Box>
    </Container>
  </form>
)
