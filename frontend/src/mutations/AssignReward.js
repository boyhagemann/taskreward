import { gql, graphql } from 'react-apollo'

const assignRewardMutation = gql(`
  mutation assignReward($input: AssignRewardInput) {
    assignReward(input: $input) {
      id
    }
  }
`)

export default graphql(assignRewardMutation, {
  props: ({ mutate }) => ({
    assignReward: ({ user, reward, lead }) => {
      mutate({ variables: {
        input: { user, reward, lead },
      } })
    }
  })
})
