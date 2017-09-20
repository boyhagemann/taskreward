import React from 'react'
import Link from './UI/Link'
import { Field } from 'redux-form'
import MaxBox from './UI/MaxBox'
import Box from './UI/Box'
import Header from './UI/Header'
import FieldWrapper from './UI/FieldWrapper'
import TextInput from './UI/TextInput'
import Loading from './Loading'
import { isIban } from '../utils/validation'

export default ({ loading, handleSubmit }) => (

  <form onSubmit={handleSubmit}>
    <MaxBox>
      <Header
        title={'My account'}
      />
      <Field
        component={FieldWrapper}
        field={TextInput}
        name={`email`}
        label="Email address"
      />
      <Box width={1}>
        <Field
          component={FieldWrapper}
          field={TextInput}
          name={`firstName`}
          label="First name"
          wrapper={{
            width: [1, 2/5],
            pr: [0, 1]
          }}
          />
        <Field
          component={FieldWrapper}
          field={TextInput}
          name="middleName"
          label="Middle name"
          wrapper={{
            width: [1, 1/5],
            pr: [0, 1]
          }}
          />
        <Field
          component={FieldWrapper}
          field={TextInput}
          name="lastName"
          label="Last name"
          wrapper={{
            width: [1, 2/5]
          }}
          />
        <Field
          component={FieldWrapper}
          field={TextInput}
          name="bankaccount"
          label="IBAN bank account number"
          description={<span>
            By registering your account, you agree to our <Link to="" target="_blank">Services Agreement</Link> and the <Link to="https://stripe.com/connect-account/legal" target="_blank">Stripe Connected Account Agreement</Link>.
          </span>}
          validate={isIban}
          />
      </Box>
    </MaxBox>
  </form>
)
