import { compose } from 'redux'
import { gql, graphql } from 'react-apollo'
import { reduxForm } from 'redux-form'
import AssignAction from './AssignAction'
import WithMutation from '../../mutations/AssignAction'
import WithNotification from '../WithNotification'

const actionQuery = gql`
query AssignActionContainer($id: ID!) {
  viewer {
    id
    profile {
      id
      lead(id: $id) {
        id
        user {
          id
          name
        }
      }
      actions {
        id
        name
        incentives {
          id
          value
        }
      }
    }
  }
}
`

const WithQuery = graphql(actionQuery, {
  options: ({ properties: { id } = {} }) => ({
    variables: { id }
  }),
  props: ({ data: { loading, viewer = {} } }) => ({
    loading,
    profile: viewer.profile
  })
})

const ReduxForm = reduxForm({
  form: 'assign-action',
  onSubmit: ({ action }, _, { profile, assignAction, notify }) => {
    assignAction(profile.lead.id, action)
      .then(response => console.log(response))
      .then(response => {
        notify('A new action is assigned to this person', 'positive')
        return response
      })
      .catch(error => console.error(error))
  }
})

export default compose(
  WithNotification,
  WithMutation,
  WithQuery,
  ReduxForm,
)(AssignAction)
