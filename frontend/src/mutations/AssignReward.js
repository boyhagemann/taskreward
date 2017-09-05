import { gql, graphql } from 'react-apollo'
import profileQuery from '../queries/Lead'

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
