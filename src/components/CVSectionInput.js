import React, { Component } from 'react'

class CVSectionInput extends Component {
  constructor() {
    super()
    this.state = {
      inputValue: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(ev) {
    this.setState({
      inputValue: ev.target.value,
    })
  }

  render() {
    const { inputValue } = this.state
    const { inputName } = this.props
    return (
      <div>
        <label>{inputName}</label>
        <input type='text' value={inputValue} onChange={this.handleChange} />
      </div>
    )
  }
}

export default CVSectionInput
