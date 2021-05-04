import React, { Component } from 'react'

class CVSectionSubmitButton extends Component {
  render() {
    const { handleSubmit } = this.props
    return <button onClick={handleSubmit}>Submit</button>
  }
}

export default CVSectionSubmitButton
