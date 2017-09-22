import React from 'react'
import styled from 'styled-components'
import Box from './Box'
import Text from './Text'
import Label from './Label'

const Wrapper = Box.extend`
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

const Description = props => <Text mt={1} mb={2} fontSize={0} color={'pencil++++'} { ...props} />

export default ({ field: Component, input, type, label, description, placeholder, meta = {}, wrapper = {}, ...fieldProps }) => {

    const error = meta.touched && meta.error
    const warning = meta.touched && meta.warning

    return <Wrapper width={1} { ...wrapper }>
      { label && <Label>{label}</Label> }
      <Box width={1}>
        <Component
          { ...input }
          type={type}
          placeholder={placeholder}
          error={error}
          warning={warning}
          { ...fieldProps }
        />
        { error && <Error>{error}</Error> }
        { warning && <Warning>{warning}</Warning> }
      </Box>
      <Box width={1}>
        { description && <Description>{description}</Description>}
      </Box>
    </Wrapper>
}
