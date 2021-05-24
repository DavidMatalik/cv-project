import React, { Component } from 'react'
import CVSectionButton from './CVSectionButton'
import CVSectionInput from './CVSectionInput'

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
    this.handleEdit = this.handleEdit.bind(this)
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

  handleEdit(ev) {
    this.setState({
      edit: true,
    })
    ev.preventDefault()
  }

  render() {
    let inputs = null

    // Either we want to have input fields in inputs
    if (this.state.edit) {
      inputs = this.fieldObjects.map((obj, i) => {
        return (
          <CVSectionInput
            key={i}
            labelName={obj.labelName}
            inputName={obj.inputName}
            inputValue={this.state[obj.inputName]}
            handleChange={this.handleChange}
          ></CVSectionInput>
        )
      })
    }

    // Or we want to have div's with latest input values
    if (!this.state.edit) {
      inputs = this.fieldObjects.map((obj, i) => {
        return (
          <div className='input-wrapper' key={i}>
            <label>{obj.labelName}</label>
            <div className='output'>{this.state[obj.inputName]}</div>
          </div>
        )
      })
    }

    return (
      <form>
        {inputs}
        <div id='buttons'>
          <CVSectionButton
            value='Edit'
            handleAction={this.handleEdit}
          ></CVSectionButton>
          <CVSectionButton
            value='Submit'
            handleAction={this.handleSubmit}
          ></CVSectionButton>
        </div>
      </form>
    )
  }
}

export default CVSectionForm
