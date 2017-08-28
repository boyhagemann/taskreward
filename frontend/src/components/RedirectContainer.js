import {  gql, graphql } from 'react-apollo'
import { connect } from 'react-redux'
import { replace } from 'react-router-redux'
import Redirect from './Redirect'

const redirect = gql(`
  mutation redirect($hash: String!, $session: String!) {
    redirect(hash: $hash, session: $session) {
      hash
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
        if(data.hash) {
          ownProps.redirect(data.hash)
        }
      })
      .catch(error => console.error('Got error', error))
  })
})(Redirect)

const mapDispatchToProps = dispatch => ({
  redirect: hash => dispatch(replace(`/leads/${hash}`))
})

export default connect(null, mapDispatchToProps)(withRedirectMutation)
