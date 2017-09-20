import React from 'react'
import { Field } from 'redux-form'
import FieldWrapper from './UI/FieldWrapper'
import TextInput from './UI/TextInput'
import TextArea from './UI/TextArea'
import Heading from './UI/Heading'
import Button from './UI/Button'

export default ({ handleSubmit, loading }) => (
  <form onSubmit={handleSubmit}>
      <Heading fontSize={5}>Profile</Heading>
      <Field
        name="name"
        label="Name"
        component={FieldWrapper}
        field={TextInput}
        width={1}
        description={`
          Give your reward a nice and catchy name.
          This name will be visible for everyone.
        `}
        />

      <Field
        name="description"
        label="Description"
        rows={10}
        component={FieldWrapper}
        field={TextArea}
        description={`
          This is the main text everyone will see.
          Tell them something that excites them about this reward.
          It will help get people moving.
        `}
        />

      <Button primary huge type="submit">Save</Button>
  </form>
)
