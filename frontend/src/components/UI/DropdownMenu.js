import React from 'react'
import { compose } from 'redux'
import styled from 'styled-components'
import Link from './Link'
import Box from './Box'
import Badge from './Badge'
import WithClickOutside from '../WithClickOutside'
import Icon from './Icon'

const Container = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  text-align: left;
`

const Item = props => <Box width={1} p={2} bg={`bleech`} { ...props } />


const Menu = ({ items, handleClick }) => (
  <Container>
    { items.map(({ to, label, badge, icon }) => (
      <Item key={to}>
        <Link key={to} to={to} color={`pencil`} onClick={handleClick}>
          {icon && <Icon name={icon} size={2} color={`pencil`} mr={1} /> }
          {label} { badge && <Badge bg={badge.background}>{badge.count}</Badge>}
        </Link>
      </Item>
    )) }
  </Container>
)

export default compose(
  WithClickOutside
)(Menu)
