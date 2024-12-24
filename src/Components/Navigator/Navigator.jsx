import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Navigator extends Component {
  render() {
    return (
      <div>Navigator
        <Link to='home'>Home</Link>
        <Link to='another'>Another</Link>
      </div>
    )
  }
}
