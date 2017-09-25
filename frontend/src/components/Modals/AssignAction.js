import React from 'react'
import Button from '../UI/Button'
import Box from '../UI/Box'
import Header from './Header'


export default ({ loading, profile, assignAction, close }) => loading ? null : (
  <Box width={1}>
    <Header title="Assign action" close={close} />
    <Box p={2}>
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
  </Box>
)
