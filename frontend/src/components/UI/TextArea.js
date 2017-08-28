import React from 'react'
import Input from './Input'

const TextArea = Input.withComponent('textarea')

export default props => <TextArea width={1} p={1} fontSize={2} color={`pencil++`} bc={`canvas---`} { ...props } />
