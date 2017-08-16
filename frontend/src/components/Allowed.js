import React from 'react'
import { gql, graphql } from 'react-apollo'
import { Redirect } from 'react-router-dom'

const AllowedWithGraphql = graphql(gql`
  query Viewer {
    viewer {
      role
    }
  }
`)

export default roles => WrappedComponent => AllowedWithGraphql( ({ data: { loading, viewer }, ...props}) => {

  if(loading) return null

  if(!viewer) return <Redirect to={`/login`} />

  return roles.includes(viewer.role)
    ? <WrappedComponent { ...props } />
    : <div>Not Allowed</div>
})
