import React, { Component } from 'react'

class CVSectionButton extends Component {
  render() {
    const { value, handleAction } = this.props
    return <button onClick={handleAction}>{value}</button>
  }
}

export default CVSectionButton
