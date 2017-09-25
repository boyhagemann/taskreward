import React from 'react'
import { gql, graphql } from 'react-apollo'
import { Redirect } from 'react-router-dom'
import NotAllowed from './NotAllowed'

const AllowedWithGraphql = graphql(gql`
  query Viewer {
    viewer {
      id
      role
    }
  }
`)

export default (mustBeAuthenticated = true, to = '/login', roles = []) => WrappedComponent => AllowedWithGraphql( ({ data: { loading, viewer }, ...props}) => {

  if(loading) return null

  if(viewer && viewer.id) {

    if(roles && mustBeAuthenticated && !roles.includes(viewer.role)) {
      return <NotAllowed match={props.match} />
    }

    return mustBeAuthenticated
      ? <WrappedComponent { ...props } />
      : <Redirect to={to} />
  }
  else {

    return !mustBeAuthenticated
      ? <WrappedComponent { ...props } />
      : <Redirect to={to} />
  }

})
