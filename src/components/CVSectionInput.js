const CVSectionInput = (props) => {
  const { labelName, inputName, inputValue, handleChange } = props

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

export default CVSectionInput
