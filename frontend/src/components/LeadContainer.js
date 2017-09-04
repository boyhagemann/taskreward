import { gql, graphql } from 'react-apollo'
import { compose } from 'redux'
import { connect } from 'react-redux'
import Lead from './Lead'

const profileQuery = gql`
query LeadContainer($id: ID!) {
  viewer {
    id
    profile {
      id
      name
      rewards {
        id
        name
      }
      lead(id: $id) {
        id
        user {
          id
          name
        }
        events {
          __typename
          ... on CreatedLead {
            id
            createdAt
            user {
              id
              name
            }
          }
          ... on AssignedReward {
            id
            createdAt
            value
            user {
              id
              name
            }
            lead {
              id
              user {
                id
                name
              }
            }
            reward {
              id
              name
            }
          }
        }
      }
    }
  }
}
`

const WithQuery = graphql(profileQuery, {
  props: ({ data: { loading, viewer =  {} } }) => ({
    loading,
    profile: viewer.profile,
  })
})


const mapStateToProps = (state, props) => ({
  id: props.match.params.id,
})

const mapDispatchToProps = (dispatch, props) => ({
})

const WithRedux = connect(mapStateToProps, mapDispatchToProps)


export default compose(
  WithRedux,
  WithQuery,
)(Lead)
