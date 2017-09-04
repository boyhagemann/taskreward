import React from 'react'
import CreatedLead from './Events/CreatedLead'
import AssignedReward from './Events/AssignedReward'

const events = {
  CreatedLead,
  AssignedReward,
}

export default ({ __typename, ...props }) => {
  const Component = events[__typename]
  return <Component key={props.id} { ...props } />
}
