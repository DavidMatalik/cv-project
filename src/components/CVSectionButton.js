const CVSectionButton = (props) => {
  const { value, handleAction } = props

  return <button onClick={handleAction}>{value}</button>
}

export default CVSectionButton
