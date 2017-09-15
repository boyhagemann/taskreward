import React, { Component } from 'react'
import ReactDOM from 'react-dom'


export default WrappedComponent => {

  return class WithClickOutside extends Component {

    constructor() {
      super()

      this.handleClick = this.handleClick.bind(this)
    }

    componentWillMount() {
      // add event listener for clicks
      document.addEventListener('click', this.handleClick, false);
    }

    componentWillUnmount() {
      // make sure you remove the listener when the component is destroyed
      document.removeEventListener('click', this.handleClick, false);
    }

    handleClick = e => {
     if(!ReactDOM.findDOMNode(this).contains(e.target)) {
       // the click was outside your component, so handle closing here
       const { onClickOutside } = this.props

       if(onClickOutside) {
         onClickOutside(e)
       }
     }
    }

    render() {
      return <WrappedComponent { ...this.props } />
    }
  }

}
