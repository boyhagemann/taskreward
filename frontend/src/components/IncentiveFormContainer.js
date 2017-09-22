import { compose } from 'redux'
import { gql, graphql, withApollo } from 'react-apollo'
import { reduxForm } from 'redux-form'
import IncentiveForm from './IncentiveForm'


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
})

const WithMutation = graphql(updateReward, {
  props: ({ mutate, ownProps }) => ({
    request: (values) => {

      const { id, name, description, value } = values

      mutate({ variables: { input: { id, name, description, value } } })
        .catch(error => console.error('Got error', error))
    }
  })
})

export default compose(
  WithReduxForm,
  WithMutation,
  withApollo
)(IncentiveForm)
