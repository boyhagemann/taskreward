import { gql, graphql } from 'react-apollo'

const assignRewardMutation = gql(`
  mutation AssignReward($input: AssignRewardInput) {
    assignReward(input: $input) {
      id
    }
  }
`)

export default graphql(assignRewardMutation, {
  props: ({ mutate }) => ({
    assignReward: (lead, reward) => {
      mutate({
        variables: {
          input: { reward, lead },
        }
      })
    }
  })
})
