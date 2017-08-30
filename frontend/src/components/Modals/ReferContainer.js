import { compose } from 'redux'
import { gql, graphql } from 'react-apollo'
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


const profileQuery = gql`
query Lead($hash: String!) {
  lead(hash: $hash) {
    invited {
      id
      user {
        name
      }
    }
  }
}
`

const WithQuery = graphql(profileQuery, {
  options: props => ({
    variables: {
      hash: props.properties.hash,
    }
  }),
  props: ({ data: { loading, lead } }) => ({
    loading,
    lead
  })
})



export default compose(
  WithQuery,
  WithCreateUserAndLead,
  ReduxForm
)(Refer)
