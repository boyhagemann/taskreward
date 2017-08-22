import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const Component = ({ component: Component, ...props }) => <Component { ...props } />

export default styled(Component)`
  display: inline-block;
  margin-right: 3px;
  background: ${ ({ theme }) => theme.tab.default.background };
  color: ${ ({ theme }) => theme.tab.default.color };
  padding: 10px;
  text-decoration: none;

  &.${ ({ theme }) => theme.tab.active.className || 'active' } {
    background: ${ ({ theme }) => theme.tab.active.background };
    color: ${ ({ theme }) => theme.tab.active.color };
  }
`
