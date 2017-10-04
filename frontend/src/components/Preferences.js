import React from 'react'
import { Link } from 'react-router-dom'
import SubHeading from './UI/SubHeading'
import MaxBox from './UI/MaxBox'
import Box from './UI/Box'
import Header from './UI/Header'
import Text from './UI/Text'
import Button from './UI/Button'
import FieldWrapper from './UI/FieldWrapper'
import Checkbox from './UI/Checkbox'
import Moment from 'react-moment'
import { Field } from 'redux-form'
import { round } from '../utils/numbers'

const Item = props => <Box width={1} bg={`bleech`} mb={2} p={1} { ...props } />

export default ({ loading, viewer, onSubmit }) => loading ? null : (
  <form onSubmit={onSubmit}>
    <MaxBox>
      <Header
        title={'Preferences'}
        />

      <Field
        name="events.viewedProfile"
        label="On view profile"
        component={FieldWrapper}
        field={Checkbox}
        description={`
          Send an email when someone views your page.
        `}
        />
    </MaxBox>
  </form>
)
