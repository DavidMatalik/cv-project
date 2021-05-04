import React, { Component } from 'react'
import CVSectionSubmitButton from './CVSectionSubmitButton'
import CVSectionEditButton from './CVSectionEditButton'

class CVSectionForm extends Component {
  constructor(props) {
    super(props)

    const { fields } = this.props

    // Create array to generate unique names for existing input fields
    this.fieldObjects = fields.map((field, i) => {
      return {
        labelName: field,
        inputName: `inputField${i}`,
      }
    })

    this.state = {
      inputNames: [],
    }

    // Put existing input names into state inputNames array
    this.fieldObjects.forEach((obj) => {
      this.setState({
        inputNames: this.state.inputNames.push({ [obj.inputName]: '' }),
      })
    })

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // This handleChange works for all input Fields
  // in this form. It puts the changed value to
  // the correspending input field using the name
  // attribute of the changed input field
  handleChange(ev) {
    this.setState({
      [ev.target.name]: ev.target.value,
    })
  }

  handleSubmit(ev) {
    console.log(this.state)
    ev.preventDefault()
  }

  render() {
    const { inputValue } = this.state
    const inputs = this.fieldObjects.map((obj, i) => {
      return (
        <div className='input-wrapper' key={i}>
          <label>{obj.labelName}</label>
          <input
            type='text'
            name={obj.inputName}
            value={inputValue}
            onChange={this.handleChange}
          />
        </div>
      )
    })

    return (
      <form>
        {inputs}
        <div id='buttons'>
          <CVSectionEditButton></CVSectionEditButton>
          <CVSectionSubmitButton
            handleSubmit={this.handleSubmit}
          ></CVSectionSubmitButton>
        </div>
      </form>
    )
  }
}

export default CVSectionForm
