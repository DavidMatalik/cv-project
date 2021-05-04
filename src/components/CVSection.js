import React, { Component } from 'react'
import CVSectionHeading from './CVSectionHeading'
import CVSectionForm from './CVSectionForm'

class CVSection extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { title, fields } = this.props

    return (
      <section className='cv-section'>
        <CVSectionHeading title={title}></CVSectionHeading>
        <CVSectionForm fields={fields}></CVSectionForm>
      </section>
    )
  }
}

export default CVSection
