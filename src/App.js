import CVSection from './components/CVSection'

function App() {
  return (
    <div className='App'>
      <h1>Create your CV!</h1>
      <CVSection title='General Information'></CVSection>
      <CVSection title='Educational experience'></CVSection>
      <CVSection title='Practical Experience'></CVSection>
    </div>
  )
}

export default App
