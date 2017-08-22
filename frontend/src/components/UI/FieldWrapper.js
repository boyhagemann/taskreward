import React from 'react'
import styled from 'styled-components'
import Box from './Box'

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

const Description = styled.p`
  color: ${ ({ theme}) => theme.input.description.color};
  font-size: 0.9em;
  margin: 0 20px;
`

export default ({ component: Component, input, type, label, description, placeholder, meta }) => {

    const error = meta.touched && meta.error
    const warning = meta.touched && meta.warning

    return <Wrapper>
      { label && <Label>{label}</Label> }
      <Box width={1/2}>
        <Component
          { ...input }
          type={type}
          placeholder={placeholder}
          error={error}
          warning={warning}
        />
        { error && <Error>{error}</Error> }
        { warning && <Warning>{warning}</Warning> }
      </Box>
      <Box width={1/2}>
        { description && <Description>{description}</Description>}
      </Box>
    </Wrapper>
}
