import React from 'react'
import styled from 'styled-components'
import Button from '../UI/Button'
import Box from '../UI/Box'
import Heading from '../UI/Heading'


export default ({ loading, profile, assignAction, close }) => loading ? null : (
  <Box width={1}>
    <Heading>Assign action</Heading>
    { profile.actions.map( action => (
      <Button
        key={action.id}
        onClick={ () => {
          assignAction(profile.lead.id, action.id)
          close()
        } }
      >{ profile.lead.user.name || 'This person' } { action.name }</Button>
    ))}
  </Box>
)
