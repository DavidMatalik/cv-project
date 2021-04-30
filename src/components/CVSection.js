import React, { Component } from 'react'
import CVSectionHeading from './CVSectionHeading'
import CVSectionInput from './CVSectionInput'

class CVSection extends Component {
  constructor() {
    super()
  }

  render() {
    const { title, fields } = this.props
    const inputs = fields.map((field, i) => {
      return (
        <div className='input-wrapper' key={i}>
          <CVSectionInput inputName={field}></CVSectionInput>
        </div>
      )
    })

    return (
      <section className='cv-section'>
        <CVSectionHeading title={title}></CVSectionHeading>
        {inputs}
      </section>
    )
  }
}

export default CVSection
