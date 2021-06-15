import CVSectionHeading from './CVSectionHeading'
import CVSectionForm from './CVSectionForm'

const CVSection = (props) => {
  const { title, fields } = props

  return (
    <section className='cv-section'>
      <CVSectionHeading title={title}></CVSectionHeading>
      <CVSectionForm fields={fields}></CVSectionForm>
    </section>
  )
}

export default CVSection
