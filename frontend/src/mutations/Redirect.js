import { gql, graphql } from 'react-apollo'

const redirect = gql(`
  mutation redirect($hash: String!, $session: String!) {
    redirect(hash: $hash, session: $session) {
      hash
    }
  }
`)

export default graphql(redirect, {
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
})
