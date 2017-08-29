import React from 'react'
import styled from 'styled-components'

import ReferContainer from './ReferContainer'

const Background = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background: black;
  opacity: 0.5;
`

const Container = styled.div`
  position: fixed;
  left: 50%;
  top: 0;
  z-index: 101;
  width: 600px;
  margin-top: 50px;
  margin-left: -300px;
  background: white;
`

const modals = {
  'refer': ReferContainer,
}

export default props => {

  const { show, type, closeOnClickOutside = true, close, ...modalProps } = props

  const Modal = modals[type]

  return show ? (
    <div>
      <Background onClick={ () => closeOnClickOutside && close() } />
      <Container>
        <Modal close={close} { ...modalProps } />
      </Container>
    </div>
  ) : null
}
