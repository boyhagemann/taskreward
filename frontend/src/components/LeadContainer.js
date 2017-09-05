import { graphql, gql } from 'react-apollo'
import { compose } from 'redux'
import { connect } from 'react-redux'
import Lead from './Lead'
import AssignReward from '../mutations/AssignReward'
import profileQuery from '../queries/Lead'

const EventSubscription = gql`
  subscription Events {
    event {
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
`

const WithQuery = graphql(profileQuery, {
  props: ({ data: { loading, viewer = {}, subscribeToMore }}) => ({
    loading,
    profile: viewer.profile,
    subscribeToEvents: () => {
        return subscribeToMore({
            document: EventSubscription,
            updateQuery: (prev, {subscriptionData}) => {

                if (!subscriptionData.data) {
                    return prev;
                }

                const newEvent = subscriptionData.data.event

                // Use ImmutableJs for this
                return { ...prev, viewer:
                  { ...prev.viewer, profile:
                    { ...prev.viewer.profile, lead:
                      { ...prev.viewer.profile.lead, events:
                        [ ...prev.viewer.profile.lead.events, newEvent]
                      }
                    }
                  }
                }
            }
        });
    }
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
  AssignReward,
)(Lead)
