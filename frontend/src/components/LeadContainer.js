import { gql, graphql } from 'react-apollo'
import { connect } from 'react-redux'
import { open } from '../redux/modal'
import Page from './Page'
import WithWindowSize from './WithWindowSize'

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
})(Page)

const mapStateToProps = (state, props) => ({
  size: state.size,
  hash: props.match.params.hash,
})

const mapDispatchToProps = dispatch => ({
  open: (type, properties) => dispatch(open(type, properties))
})

const WithRedux = connect(mapStateToProps, mapDispatchToProps)(WithGraphQl)

export default WithWindowSize(WithRedux)
