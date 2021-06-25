import { useState } from 'react'
import CVSectionButton from './CVSectionButton'
import CVSectionInput from './CVSectionInput'

const CVSectionForm = (props) => {
  const { fields } = props

  const fieldObjects = fields.map((field, i) => {
    return {
      labelName: field,
      inputName: `inputField${i}`,
    }
  })

  const stateInputObj = fieldObjects.reduce((acc, cv) => {
    const { inputName } = cv
    return { [inputName]: '', ...acc }
  }, [])

  const [inputsState, setInputsState] = useState(stateInputObj)
  const [edit, setEdit] = useState(true)

  // This handleChange works for all input Fields
  // in this form. It puts the changed value to
  // the correspending input field using the name
  // attribute of the changed input field
  const handleChange = (ev) => {
    const { name, value } = ev.target
    setInputsState((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (ev) => {
    setEdit(false)
    ev.preventDefault()
  }

  const handleEdit = (ev) => {
    setEdit(true)
    ev.preventDefault()
  }

  let inputs = null

  if (edit) {
    inputs = fieldObjects.map((obj, i) => {
      return (
        <CVSectionInput
          key={i}
          labelName={obj.labelName}
          inputName={obj.inputName}
          inputValue={inputsState[obj.inputName]}
          handleChange={handleChange}
        ></CVSectionInput>
      )
    })
  }

  // Or we want to have div's with latest input values
  if (!edit) {
    inputs = fieldObjects.map((obj, i) => {
      return (
        <div className='input-wrapper' key={i}>
          <label>{obj.labelName}</label>
          <div className='output'>{inputsState[obj.inputName]}</div>
        </div>
      )
    })
  }

  return (
    <form>
      {inputs}
      <div id='buttons'>
        <CVSectionButton
          value='Submit'
          handleAction={handleSubmit}
        ></CVSectionButton>
        <CVSectionButton
          value='Edit'
          handleAction={handleEdit}
        ></CVSectionButton>
      </div>
    </form>
  )
}

export default CVSectionForm
