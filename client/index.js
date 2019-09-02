import React, { Component } from 'react'
import { render } from 'react-dom'

export default class Index extends Component {
  render() {
    return <div>Hello Form React App</div>
  }
}

render(<Index />, document.getElementById('root'))
