import {  gql, graphql } from 'react-apollo'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Redirect from './Redirect'

const redirect = gql(`
  mutation redirect($task: ID, $parent: ID, $session: String!) {
    redirect(task: $task, parent: $parent, session: $session) {
      id
    }
  }
`)

const withRedirectMutation = graphql(redirect, {
  props: ({ mutate, ownProps }) => ({
    redirect: () => mutate({ variables: {
      parent: ownProps.parent,
      task: ownProps.task,
      session: 'the-session-string'
    } })
      .then(response => {
        const data = response.data.redirect
        if(data.id) {
          ownProps.redirect(data.id)
        }
      })
      .catch(error => console.error('Got error', error))
  })
})(Redirect)

const mapDispatchToProps = dispatch => ({
  redirect: id => dispatch(push(`/leads/${id}`))
})

export default connect(null, mapDispatchToProps)(withRedirectMutation)
