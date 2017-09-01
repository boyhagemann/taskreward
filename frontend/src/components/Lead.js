import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Box from './UI/Box'
import MaxBox from './UI/MaxBox'
import CreatedLead from './Events/CreatedLead'

const Breadcrumb = props => <Box width={1} my={2} { ...props } />

const events = {
  CreatedLead,
}

const renderEvent = ({ __typename, ...props }) => {
  const Component = events[__typename]
  return <Component key={props.id} { ...props } />
}

export default ({ loading, profile }) => loading ? null : (
  <MaxBox>

    <Breadcrumb>
      <Link to={`/leads`}>Leads</Link>
    </Breadcrumb>

    <h2>{ profile.name }</h2>

    <h2>Stream</h2>
    { profile.lead.events.map(renderEvent)}
  </MaxBox>
)
