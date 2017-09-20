import { graphql, gql } from 'react-apollo'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { open } from '../redux/modal'
import PageLead from './PageLead'
import eventsFragment from '../fragments/events'

const PageLeadQuery = gql`
query LeadContainer($id: ID!) {
  viewer {
    id
    profile {
      id
      name
      incentives {
        id
        name
      }
      lead(id: $id) {
        id
        user {
          id
          name
          email
        }
        parent {
          id
          user {
            id
            name
          }
        }
        events {
          ${eventsFragment}
        }
      }
    }
  }
}
`

const EventSubscription = gql`
  subscription Events {
    event {
      ${eventsFragment}
    }
  }
`

const subscribeToEvents = subscribeToMore => subscribeToMore({
    document: EventSubscription,
    updateQuery: (prev, {subscriptionData}) => {

        if (!subscriptionData.data) {
            return prev;
        }

        const newEvent = subscriptionData.data.event

        // Only show the events for the current lead
        if(!newEvent.lead) return prev
        if(prev.viewer.profile.lead.id !== newEvent.lead.id) return prev

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
})

const WithQuery = graphql(PageLeadQuery, {
  props: ({ data: { loading, viewer = {}, subscribeToMore }}) => ({
    loading,
    viewer,
    profile: viewer.profile,
    subscribeToEvents: subscribeToEvents(subscribeToMore),
  })
})

const mapStateToProps = (state, props) => ({
  id: props.match.params.id,
})

const mapDispatchToProps = (dispatch, props) => ({
  openAssignActionModal: () => {
    const id = props.match.params.id
    dispatch(open('assignAction', { id }))
  }
})

const WithRedux = connect(mapStateToProps, mapDispatchToProps)


export default compose(
  WithRedux,
  WithQuery,
)(PageLead)
