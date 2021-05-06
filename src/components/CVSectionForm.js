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
      inputValues: [],
      edit: true,
    }

    // Put existing input names into state inputValues array
    this.fieldObjects.forEach((obj) => {
      this.setState({
        inputValues: this.state.inputValues.push({ [obj.inputName]: '' }),
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
    // Find index in inputValues at which the key name is the same
    // as name of ev.target.name
    const index = this.state.inputValues.findIndex((obj) => {
      const key = Object.keys(obj)
      return key[0] === ev.target.name
    })

    // Create copy of inputValues and write
    // ev.target.value as value to the object which
    // is at the found index from above
    let newInputValues = this.state.inputValues
    newInputValues[index][ev.target.name] = ev.target.value

    this.setState({
      inputValues: newInputValues,
    })
  }

  handleSubmit(ev) {
    this.setState({
      edit: false,
    })
    ev.preventDefault()
  }

  render() {
    let inputs = null
    // Either we want to have input fields in inputs
    if (this.state.edit) {
      inputs = this.fieldObjects.map((obj, i) => {
        return (
          <div className='input-wrapper' key={i}>
            <label>{obj.labelName}</label>
            <input
              type='text'
              name={obj.inputName}
              value={this.state.inputValues[i][obj.inputName]}
              onChange={this.handleChange}
            />
          </div>
        )
      })
    }

    // Or if clicked on submit button
    // we want to have p's or div's with latest input values
    if (!this.state.edit) {
      inputs = this.fieldObjects.map((obj, i) => {
        return (
          <div className='input-wrapper' key={i}>
            <label>{obj.labelName}</label>
            {/* Put right state values instead of Placeholder */}
            <div className='output'>Placeholder</div>
          </div>
        )
      })
    }

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
