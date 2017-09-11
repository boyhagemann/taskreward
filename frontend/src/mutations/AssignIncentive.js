import { gql, graphql } from 'react-apollo'

const assignIncentiveMutation = gql(`
  mutation AssignIncentive($input: AssignIncentiveInput) {
    assignIncentive(input: $input) {
      id
    }
  }
`)

export default graphql(assignIncentiveMutation, {
  props: ({ mutate }) => ({
    assignIncentive: (lead, incentive) => {
      mutate({
        variables: {
          input: { lead, incentive },
        }
      })
    }
  })
})
