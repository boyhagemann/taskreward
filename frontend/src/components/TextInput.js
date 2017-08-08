import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  font-size: 1em;
  box-sizing: border-box;
  border: 1px solid;
  border-color: ${ props => props.error ? "#c66" : props.warning ? "orange" : "#c5c7c9" };
  padding: 8px;
  color: ${ props => props.error ? "#c66" : props.warning ? "orange" : "#000" };

  ::-webkit-input-placeholder {
    color: #ccc;
  }
  :focus {
    outline: none;
  }
`

const Wrapper = styled.div`
  margin-bottom: 10px;
`

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`

const Message = styled.p`
  font-size: 0.9em;
  margin: 5px 0 0;
`

const Error = Message.extend`
  color: #c66;
`

const Warning = Message.extend`
  color: orange;
`

export default props => (
  <Wrapper>
    { props.label && <Label>{props.label}</Label> }
    <Input { ...props } />
    { props.error && <Error>{props.error}</Error> }
    { props.warning && <Warning>{props.warning}</Warning> }
  </Wrapper>
)
