import React from 'react'
import styled from 'styled-components'
import Box from '../UI/Box'

import ReferContainer from './ReferContainer'
import AssignIncentiveContainer from './AssignIncentiveContainer'

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

const Container = styled(Box)`
  top: 0;
  z-index: 101;
  position: fixed;

  max-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  max-width: ${ props => props.width}px;
  margin-left: ${ ({ width, windowSize }) =>
    windowSize.width > width ? (windowSize.width - width) / 2 : 0
  }px;
  background: white;
`

const Inner = styled.div`
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0px;  /* remove scrollbar space */
    background: transparent;  /* optional: just make scrollbar invisible */
  }
`

const modals = {
  'refer': ReferContainer,
  'assignIncentive': AssignIncentiveContainer,
}

export default props => {

  const { show, width = 900, type, windowSize, closeOnClickOutside = true, close, ...modalProps } = props

  const Modal = modals[type]

  return show ? (
    <div>
      <Background onClick={ () => closeOnClickOutside && close() } />
      <Container mt={[0, 50]} width={width} windowSize={windowSize}>
        <Inner>
          <Modal close={close} { ...modalProps } />
        </Inner>
      </Container>
    </div>
  ) : null
}
