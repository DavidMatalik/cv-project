import React, { Component } from 'react'

class CVSectionEditButton extends Component {
  render() {
    const { handleEdit } = this.props
    return <button onClick={handleEdit}>Edit</button>
  }
}

export default CVSectionEditButton
