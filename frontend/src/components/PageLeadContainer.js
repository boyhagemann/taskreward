import { graphql, gql } from 'react-apollo'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { open } from '../redux/modal'
import PageLead from './PageLead'
import profileQuery from '../queries/Lead'
import eventsFragment from '../queries/eventsFragment'

const EventSubscription = gql`
  subscription Events {
    event {
      ${eventsFragment}
    }
  }
`

const WithQuery = graphql(profileQuery, {
  props: ({ data: { loading, viewer = {}, subscribeToMore }}) => ({
    loading,
    viewer,
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
  openAssignIncentiveModal: () => {
    const id = props.match.params.id
    dispatch(open('assignIncentive', { id }))
  }
})

const WithRedux = connect(mapStateToProps, mapDispatchToProps)


export default compose(
  WithRedux,
  WithQuery,
)(PageLead)
