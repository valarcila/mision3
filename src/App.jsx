import { useState } from 'react'
import Header from './components/Header'
import Informacion from './components/Informacion'
import Filtros from './components/Filtros'
import Asteroides from './components/Asteroides'
import './App.css'

function App() {
  const [filtro, setFiltro] = useState("todos")
  const asteroides = []

  return (
    <>
      <Header/>
      <main>
        <Informacion numero = {0} distancia = {0}/>
        <section>
          <h2>Explorar asteroides</h2>
          <Filtros filtro = {filtro} cambiarFiltro = {setFiltro}/>
          <Asteroides asteroides = {asteroides}/>
        </section>
      </main>
    </>
  )
}

export default App
