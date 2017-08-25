import React from 'react'
import styled from 'styled-components'
import { Grid as Box } from 'grid-styled'
import TextInput from './TextInput'

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
  font-size: 0.9em;
  margin: 5px 0 0;
`

export default ({ component: Component = TextInput, input, type, label, description, placeholder, meta }) => {

    const error = meta.touched && meta.error
    const warning = meta.touched && meta.warning

    return <Wrapper>
      { label && <Label>{label}</Label> }
      <Box>
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
      <Box>
        { description && <Description>{description}</Description>}
      </Box>
    </Wrapper>
}
