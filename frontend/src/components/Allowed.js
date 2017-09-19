import React from 'react'
import { gql, graphql } from 'react-apollo'
import { Redirect } from 'react-router-dom'

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

  if(viewer.id) {

    if(roles && mustBeAuthenticated && !roles.includes(viewer.role)) {
      return <div>Not Allowed</div>
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
