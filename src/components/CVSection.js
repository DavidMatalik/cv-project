import React, { Component } from 'react'
import CVSectionHeading from './CVSectionHeading'

class CVSection extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <section class='cv-section'>
        <CVSectionHeading title={this.props.title}></CVSectionHeading>
      </section>
    )
  }
}

export default CVSection
