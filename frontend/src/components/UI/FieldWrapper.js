import React from 'react'
import styled from 'styled-components'
import Box from './Box'
import TextInput from './TextInput'
import Text from './Text'

const Wrapper = Box.extend`
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

const Description = props => <Text { ...props} fontSize={1} color={'pencil++++'} />

export default ({ component: Component = TextInput, input, type, label, description, placeholder, meta }) => {

    const error = meta.touched && meta.error
    const warning = meta.touched && meta.warning

    return <Wrapper width={1} mb={2}>
      { label && <Label>{label}</Label> }
      <Box width={1}>
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
      <Box width={1}>
        { description && <Description>{description}</Description>}
      </Box>
    </Wrapper>
}
