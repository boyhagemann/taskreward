import { gql, graphql } from 'react-apollo'
import { compose } from 'redux'
import { reduxForm } from 'redux-form'
import Account from './Account'


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
        .catch(error => console.error('Got error', error))
    }
  })
})

export default compose(
  WithQuery,
  WithMutation,
  WithReduxForm,
)(Account)
