import { gql, graphql } from 'react-apollo'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import Account from './Account'
import { notify } from '../redux/notifications'

const updateAccount = gql(`
  mutation updateAccount($input: UpdateUserInput) {
    updateUser(input: $input) {
      id
      email
      firstName
      middleName
      lastName
      email
      telephone
    }
  }
`)

const WithReduxForm = reduxForm({
  form: 'account',
  onSubmit: (input, _, { updateAccount }) => updateAccount(input),

  // Needed this to show the initial values from apollo client
  // @doc https://github.com/erikras/redux-form/issues/1665
  enableReinitialize: true
})

const WithQuery = graphql(gql`
  query Account {
    viewer {
      id
      firstName
      middleName
      lastName
      email
      telephone
      bankaccount
      dobYear
      dobMonth
      dobDay
    }
  }
`, {
  props: ({ data: { loading, viewer = {} } }) => ({
    loading,
    viewer,
    initialValues: viewer,
  })
})

const WithMutation = graphql(updateAccount, {
  props: ({ mutate, ownProps }) => ({
    updateAccount: (values) => {

      const { email, telephone, firstName, middleName, lastName, bankaccount, dobYear, dobMonth, dobDay } = values

      mutate({ variables: { input: { email, telephone, firstName, middleName, lastName, bankaccount, dobYear, dobMonth, dobDay } } })
        .then( () => ownProps.notify('Your account has been updated', 'notice'))
        .catch(error => console.error('Got error', error))
    }
  })
})


const mapDispatchToProps = dispatch => ({
  notify: (text, status) => dispatch(notify({ text, status }))
})

const WithRedux = connect(null, mapDispatchToProps)

export default compose(
  WithQuery,
  WithRedux,
  WithMutation,
  WithReduxForm,
)(Account)
