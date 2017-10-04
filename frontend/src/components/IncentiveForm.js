import React from 'react'
import { Field } from 'redux-form'
import FieldWrapper from './UI/FieldWrapper'
import TextInput from './UI/TextInput'
import TextArea from './UI/TextArea'
import Button from './UI/Button'

export default ({ handleSubmit, remove, name }) => {

  return (
  <form onSubmit={handleSubmit}>

      <Field
        name={`name`}
        label="Name"
        component={FieldWrapper}
        field={TextInput}
        description={`
          Give your reward a nice and catchy name.
          This name will be visible for everyone.
        `}
        />

      <Field
        name={`description`}
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

      <Field
        name={`value`}
        label="Reward"
        component={FieldWrapper}
        field={TextInput}
        description={`
          Enter the reward that a person gets when he or she helps finding the right person for the job.
          Please note that additional costs will be in place, in order to pay out everyone who was involved.
        `}
        />

        <Field
          name={`action`}
          label="This reward is fullfilled when a user..."
          component={FieldWrapper}
          field={TextInput}
          placeholder={`Finish the sentence above, like "bought the product" or "came to the office"`}
          description={`
            This text will show up in the assign reward section.
          `}
          />

      <Button primary type="submit">Save</Button>
      <Button negative onClick={() => remove() }>Remove</Button>

    </form>
)}
