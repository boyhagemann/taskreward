import { gql, graphql, withApollo } from 'react-apollo'
import { reduxForm } from 'redux-form'
import RewardForm from './RewardForm'


const updateReward = gql(`
  mutation updateReward($input: UpdateRewardInput) {
    updateReward(input: $input) {
      id
      name
      description
      value
    }
  }
`)

const WithReduxForm = reduxForm({
  onSubmit: (values, _, { request }) => request(values)
})(RewardForm)


export default withApollo(graphql(updateReward, {
  props: ({ mutate, ownProps }) => ({
    request: (values) => {

      const { id, name, description, value } = values

      mutate({ variables: { input: { id, name, description, value } } })
        .catch(error => console.error('Got error', error))
    }
  })
})(WithReduxForm))
