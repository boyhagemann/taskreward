import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.div``

const Heading = styled.h2``
const Description = styled.p``
const Owner = styled.div``

export default ({ id, name, description, owner }) => (
  <Wrapper key={id}>
    <Heading>{ name }</Heading>
    <Description>{ description }</Description>
    <Owner>Owned by { owner.email }</Owner>
    <Link to={`/tasks/${id}`}>View</Link>
  </Wrapper>
)
