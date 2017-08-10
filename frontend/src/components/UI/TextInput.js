import React from 'react'
import styled from 'styled-components'

export default styled.input`
  font-size: 1em;
  font-family: Verdana;
  box-sizing: border-box;
  background: #fff;
  border: 1px solid;
  width: 100%;
  border-color: ${ props => props.error ? "#c66" : props.warning ? "orange" : "#c5c7c9" };
  padding: 10px;
  color: ${ props => props.error ? "#c66" : props.warning ? "orange" : "#000" };

  ::-webkit-input-placeholder {
    color: #ccc;
  }
  :focus {
    outline: none;
  }
`
