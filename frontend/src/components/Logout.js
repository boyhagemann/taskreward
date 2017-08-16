import React from 'react'
import { withApollo } from 'react-apollo'
import { Redirect } from 'react-router-dom'

const Logout = ({ client }) => {

  // Remove the token from the local storage
  localStorage.removeItem('token')

  // Reset any cached data from the Apollo client redux store
  client.resetStore()

  // Redirect back to the login page
  return <Redirect to={`/login`} />
}

export default withApollo(Logout)
