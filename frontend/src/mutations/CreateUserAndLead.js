import { gql, graphql } from 'react-apollo'

const createLeadMutation = gql(`
  mutation createLead($user: CreateUserInput, $lead: CreateLeadInput) {
    createUser(input: $user) {
      id
    }
    createLead(input: $lead) {
      hash
    }
  }
`)

export default graphql(createLeadMutation, {
  props: ({ mutate, ownProps }) => ({
    createUserAndLead: (values) => {
      const { firstName, middleName, lastName, email, telephone, hash, user } = values
      mutate({ variables: {
        user: { id: user, firstName, middleName, lastName, email, telephone },
        lead: { hash, user }
      } })
    }
  })
})
