import data from './data'
import { useState } from 'react'
import List from './List'

const App = () => {
  const [people, setPeople] = useState(data)
  const handleClearList = () => {
    setPeople([])
  }

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button
          type="button"
          onClick={() => handleClearList()}
          className="btn btn-block"
        >
          clear all
        </button>
      </section>
    </main>
  )
}
export default App
