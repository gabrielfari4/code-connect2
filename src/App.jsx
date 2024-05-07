import './App.css'
import Card from './components/Card'
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
        {/* Criar componente ordenação */}
        <Card />
      </div>
    </div>
  )
}

export default App
