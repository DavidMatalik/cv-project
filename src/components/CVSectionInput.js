import React from 'react'

class CVSectionInput extends React.Component {
  render() {
    const { labelName, inputName, inputValue, handleChange } = this.props

    return (
      <div className='input-wrapper'>
        <label>{labelName}</label>
        <input
          type='text'
          name={inputName}
          value={inputValue || ''}
          onChange={handleChange}
        />
      </div>
    )
  }
}

export default CVSectionInput
