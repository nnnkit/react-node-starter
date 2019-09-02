import React, { Component } from 'react'
import { render } from 'react-dom'

export default class Index extends Component {
  state = {
    name: 'Ankit',
  }
  asyncFunc = () => Promise.resolve('Sameer')
  async componentDidMount() {
    this.setState({ name: await this.asyncFunc() })
  }

  render() {
    return <div>Hello Form {this.state.name}</div>
  }
}

render(<Index />, document.getElementById('root'))
