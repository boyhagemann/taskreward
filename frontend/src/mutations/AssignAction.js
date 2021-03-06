import { gql, graphql } from 'react-apollo'

const mutation = gql(`
  mutation AssignAction($input: AssignActionInput) {
    assignAction(input: $input) {
      id
    }
  }
`)

export default graphql(mutation, {
  props: ({ mutate, ownProps }) => ({
    assignAction: (lead, action) => mutate({
      variables: {
        input: { lead, action },
      }
    })
  })
})
