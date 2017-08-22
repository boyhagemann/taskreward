import React from 'react'
import { Field } from 'redux-form'
import FieldWrapper from './UI/FieldWrapper'
import TextInput from './UI/TextInput'
import TextArea from './UI/TextArea'
import Button from './UI/Button'
import Box from './UI/Box'

export default ({ remove, name, ...props }) => {

  return (
      <Box>
        <Field
          name={`${name}.name`}
          label="Name"
          component={ props => <FieldWrapper component={TextInput} {...props} />}
          description={`
            Give your reward a nice and catchy name.
            This name will be visible for everyone.
          `}
          />

        <Field
          name={`${name}.description`}
          label="Description"
          rows={10}
          component={ props => <FieldWrapper component={TextArea} {...props} />}
          description={`
            This is the main text everyone will see.
            Tell them something that excites them about this reward.
            It will help get people moving.
          `}
          />

        <Field
          name={`${name}.value`}
          label="Reward"
          component={ props => <FieldWrapper component={TextInput} {...props} />}
          description={`
            Enter the reward that a person gets when he or she helps finding the right person for the job.
            Please note that additional costs will be in place, in order to pay out everyone who was involved.
          `}
          />

        <Button negative onClick={() => remove() }>Remove</Button>

      </Box>
)}