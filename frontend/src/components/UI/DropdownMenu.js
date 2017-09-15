import React from 'react'
import { compose } from 'redux'
import styled from 'styled-components'
import Link from './Link'
import Box from './Box'
import Badge from './Badge'
import WithClickOutside from '../WithClickOutside'

const Container = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  text-align: left;
`

const Item = props => <Box width={1} p={2} bg={`bleech`} { ...props } />


const Menu = ({ items, handleClick }) => (
  <Container>
    { items.map(({ to, label, badge }) => (
      <Item key={to}>
        <Link key={to} to={to} color={`pencil`} onClick={handleClick}>
          {label} { badge && <Badge bg={badge.background}>{badge.count}</Badge>}
        </Link>
      </Item>
    )) }
  </Container>
)

export default compose(
  WithClickOutside
)(Menu)
