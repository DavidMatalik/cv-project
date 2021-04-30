import React, { Component } from 'react'

class CVSectionInput extends Component {
  render() {
    return (
      <div>
        <label>{this.props.inputName}</label>
        <input type='text' />
      </div>
    )
  }
}

export default CVSectionInput
