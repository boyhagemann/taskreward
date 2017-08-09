import React from 'react'
import { Field } from 'redux-form'
import TextInput from './UI/TextInput'
import TextArea from './UI/TextArea'
import Button from './UI/Button'

export default ({ handleSubmit, task }) => (
  <form onSubmit={handleSubmit}>

    <div>

      <Field
        name="name"
        label="Name"
        component={TextInput}
      />

      <Field
        name="description"
        label="Description"
        component={TextArea}
      />

      <Field
        name="reward"
        label="Reward"
        component={TextInput}
      />

      <Button primary type="submit">Save</Button>

    </div>

  </form>
)
