import { useState } from 'react'
import Header from './components/Header'
import Informacion from './components/Informacion'
import Filtros from './components/Filtros'
import './App.css'

function App() {
  const [filtro, setFiltro] = useState("todos")

  return (
    <>
      <Header/>
      <main>
        <Informacion numero = {0} distancia = {0}/>
        <section>
          <h2>Explorar asteroides</h2>
          <Filtros filtro = {filtro} cambiarFiltro = {setFiltro}/>
        </section>
      </main>
    </>
  )
}

export default App
