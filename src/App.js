import CVSection from './components/CVSection'

function App() {
  const generalFields = ['Name', 'Email', 'Phone']
  const educationFields = ['School name', 'Title of Study', 'Date of Study']
  // prettier-ignore
  const practiceFields = ['Company Name', 'Position title', 'Main tasks', 'Start Date', 'End Date']

  return (
    <div className='App'>
      <h1>Create your CV!</h1>
      {/* prettier-ignore*/}
      <CVSection 
        title='General Information' 
        fields={generalFields}></CVSection>
      <CVSection
        title='Educational experience'
        fields={educationFields}
      ></CVSection>
      <CVSection
        title='Practical Experience'
        fields={practiceFields}
      ></CVSection>
    </div>
  )
}

export default App
