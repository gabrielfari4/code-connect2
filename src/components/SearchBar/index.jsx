import { useState } from 'react'
import './styles.css'

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    console.log(searchTerm)
    return (
        <input 
        type="search" 
        placeholder="Digite o que você procura" 
        className='barra-pesquisa'
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)} />
    )
}