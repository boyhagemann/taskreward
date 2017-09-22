import React from 'react'
import Link from './UI/Link'
import { Field } from 'redux-form'
import MaxBox from './UI/MaxBox'
import Box from './UI/Box'
import Header from './UI/Header'
import FieldWrapper from './UI/FieldWrapper'
import TextInput from './UI/TextInput'
import SubHeading from './UI/SubHeading'
import Text from './UI/Text'
import Button from './UI/Button'
import Loading from './Loading'
import DateOfBirth from './UI/DateOfBirth'
import { isIban } from '../utils/validation'
import Icon from './UI/Icon'

export default ({ loading, handleSubmit }) => (

  <form onSubmit={handleSubmit}>
    <MaxBox>
      <Header
        title={'My account'}
      />
      <Box width={2/3}>
        <Icon name="home" size={5} color={`ocean`} />
        <Field
          component={FieldWrapper}
          field={TextInput}
          name={`email`}
          label="Email address"
        />
        <SubHeading>Personal information</SubHeading>
        <Text>
          In order for us to pay out the rewards, we need some personal information.
          We can only pay you if this information is provided and valid.
        </Text>
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
        <DateOfBirth
          name="DateOfBirth"
          width={[1, 1/2]}
          />
        <Field
          component={FieldWrapper}
          field={TextInput}
          name="bankaccount"
          label="IBAN bank account number"
          validate={isIban}
          />

        <Text fontSize={0} color={`pencil+++`}>
            By registering your account, you agree to our <Link to="" target="_blank">Services Agreement</Link> and the <Link to="https://stripe.com/connect-account/legal" target="_blank">Stripe Connected Account Agreement</Link>.
        </Text>

        <Button primary>Save changes</Button>

      </Box>
    </MaxBox>
  </form>
)
