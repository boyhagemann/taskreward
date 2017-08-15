import {  gql, graphql } from 'react-apollo'
import { connect } from 'react-redux'
import { replace } from 'react-router-redux'
import Redirect from './Redirect'

const redirect = gql(`
  mutation redirect($hash: String!, $session: String!) {
    redirect(hash: $hash, session: $session) {
      id
    }
  }
`)

const withRedirectMutation = graphql(redirect, {
  props: ({ mutate, ownProps }) => ({
    redirect: () => mutate({ variables: {
      hash: ownProps.hash,
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
  redirect: id => dispatch(replace(`/leads/${id}`))
})

export default connect(null, mapDispatchToProps)(withRedirectMutation)
