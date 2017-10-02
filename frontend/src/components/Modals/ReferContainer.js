import { compose } from 'redux'
import { gql, graphql } from 'react-apollo'
import { reduxForm } from 'redux-form'
import Refer from './Refer'
import CreateUserMutation from '../../mutations/CreateUser'
import CreateLeadMutation from '../../mutations/CreateLead'

const ReduxForm = reduxForm({
  form: 'refer',
  onSubmit: (values, _, { createUser, createLead, lead: { id } }) => {

    const { firstName, middleName, lastName, email, telephone } = values

    createUser({ firstName, middleName, lastName, email, telephone })
      .then( response => createLead({
         parent: id,
         user: response.data.createUser.id,
      }))
  }
})


const profileQuery = gql`
query Lead($hash: String!) {
  lead(hash: $hash) {
    id
    invited {
      id
      user {
        id
        name
      }
    }
  }
}
`

const WithQuery = graphql(profileQuery, {
  options: ({ properties = {} }) => ({
    variables: {
      hash: properties.hash,
    }
  }),
  props: ({ data: { loading, lead } }) => ({
    loading,
    lead
  })
})



export default compose(
  WithQuery,
  CreateUserMutation,
  CreateLeadMutation,
  ReduxForm
)(Refer)
