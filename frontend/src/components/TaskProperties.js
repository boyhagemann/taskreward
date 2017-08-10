import React from 'react'
import { Field } from 'redux-form'
import FieldWrapper from './UI/FieldWrapper'
import TextInput from './UI/TextInput'
import TextArea from './UI/TextArea'
import Button from './UI/Button'
import Container from './UI/Container'
import Box from './UI/Box'

export default ({ handleSubmit, task }) => (
  <form onSubmit={handleSubmit}>

    <Container>
      <Box max={1200}>

        <Box width={1/2}>
          <Field
            name="name"
            label="Name"
            component={ props => <FieldWrapper component={TextInput} {...props} />}
            />

          <Field
            name="description"
            label="Description"
            component={ props => <FieldWrapper component={TextArea} {...props} />}
            />

          <Field
            name="reward"
            label="Reward"
            component={ props => <FieldWrapper component={TextInput} {...props} />}
            />

          <Button primary type="submit">Save</Button>
        </Box>

      </Box>
    </Container>

  </form>
)
