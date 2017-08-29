import { gql, graphql } from 'react-apollo'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import Page from './Page'
import WithWindowSize from './WithWindowSize'

const WithForm = reduxForm({
  form: 'page',
})(Page)

const WithGraphQl = graphql(gql`
  query Profile($hash: String!) {
    lead(hash: $hash) {
      profile {
        name
        description
        rewards {
          id
          name
          description
          value
        }
      }
    }
  }
`, {
  props: ({ data: { loading, lead } }) => ({
    loading,
    lead,
    profile: lead && lead.profile
  })
})(WithForm)

export default connect( (state, props) => ({
  size: state.size,
  hash: props.match.params.hash,
}))(WithWindowSize(WithGraphQl))
