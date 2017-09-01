import { gql, graphql } from 'react-apollo'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Leads from './Leads'

const WithQuery = graphql(gql`
  query Leads {
    viewer {
      id
      profile {
        id
        leads {
          id
          hash
          user {
            id
            name
            email
            telephone
          }
        }
      }
    }
  }
`, {
  props: ({ data: { loading, viewer = {} } }) => ({
    loading, leads: viewer.profile ? viewer.profile.leads : []
  })
})

const mapDispatchToProps = dispatch => ({
  view: id => dispatch(push(`/leads/${id}`))
})

const WithRedux = connect(null, mapDispatchToProps)

export default compose(
  WithQuery,
  WithRedux
)(Leads)
