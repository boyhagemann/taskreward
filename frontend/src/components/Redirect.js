import React, { Component } from 'react'

export default class extends Component {

  componentDidMount() {
    this.props.redirect()
  }

  render() {
    return <div>Redirecting...</div>
  }
}
