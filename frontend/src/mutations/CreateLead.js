import { gql, graphql } from 'react-apollo'
import id from 'uuid/v4'

const createLeadMutation = gql(`
  mutation createLead($input: CreateLeadInput) {
    createLead(input: $input) {
      id
      hash
    }
  }
`)

export default graphql(createLeadMutation, {
  props: ({ mutate, ownProps }) => ({
    createLead: (values) => {

      const { parent, user } = values

      return mutate({ variables: {
        input: { parent, user, source: 'invitation' }
      } })
    }
  })
})
