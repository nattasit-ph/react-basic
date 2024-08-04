import React, { Component } from 'react'

export default class ServiceClassComponent extends Component {
  render() {
    return (
      <div>
        <h1>Service Class Component -- Statefull</h1>
        <p>เข้าถึง state ได้เลยโดยไม่ต้อง import โดยใช้ this.state</p>
      </div>
    )
  }
}
