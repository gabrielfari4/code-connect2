import './App.css'
import Filter from './components/Filter'
import SearchBar from './components/SearchBar'
import Sidebar from './components/Sidebar'

function App() {
  

  return (
    <div className='container'>
      <Sidebar />
      <div>
        <SearchBar />
        <Filter />
      </div>
    </div>
  )
}

export default App
