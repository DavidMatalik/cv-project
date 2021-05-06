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
      edit: true,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // Write available input fields in state
  componentDidMount() {
    this.fieldObjects.forEach((obj) => {
      this.setState({
        [obj.inputName]: '',
      })
    })
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
              value={this.state[obj.inputName] || ''}
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
