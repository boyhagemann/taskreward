import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-bottom: 20px;
`

const Label = styled.label`
  display: block;
  font-family: Verdana;
  font-weight: bold;
  font-size: 0.9em;
  margin-bottom: 5px;
`

const Message = styled.p`
  font-size: 0.9em;
  font-family: Verdana;
  margin: 5px 0 0;
`

const Error = Message.extend`
  color: #c66;
`

const Warning = Message.extend`
  color: orange;
`

export default ({ component: Component, ...props }) => (
  <Wrapper>
    { props.label && <Label>{props.label}</Label> }
    <Component { ...props } />
    { props.error && <Error>{props.error}</Error> }
    { props.warning && <Warning>{props.warning}</Warning> }
  </Wrapper>
)
