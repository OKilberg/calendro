import './App.scss'
import Calendar from './calendar/Calendar'

function App() {

  return (
    <>
      <main className=''>
        <header>
          <h1>Calendro</h1>
          <p>A Simple Calendar App</p>
        </header>
        <section>
          <Calendar/>
        </section>
      </main>
    </>
  )
}

export default App
