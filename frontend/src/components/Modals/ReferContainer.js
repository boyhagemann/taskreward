import { compose } from 'redux'
import { reduxForm } from 'redux-form'
import id from 'uuid/v4'
import Refer from './Refer'
import WithCreateUserAndLead from '../../mutations/CreateUserAndLead'

const ReduxForm = reduxForm({
  form: 'refer',
  onSubmit: (values, _, { createUserAndLead, properties: { hash } }) => {
    createUserAndLead({ ...values, hash, user: id() })
  }
})

export default compose(
  WithCreateUserAndLead,
  ReduxForm
)(Refer)
