import './App.css'
import Card from './components/Card'
import Filter from './components/Filter'
import OrderBy from './components/OrderBy'
import SearchBar from './components/SearchBar'
import Sidebar from './components/Sidebar'

function App() {
  

  return (
    <div className='container'>
      <Sidebar />
      <div>
        <SearchBar />
        <Filter />
        <OrderBy />
        <div className='container__cards'>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}

export default App
