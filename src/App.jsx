import { useState, useEffect } from 'react'
import Header from './components/Header'
import Informacion from './components/Informacion'
import Filtros from './components/Filtros'
import Asteroides from './components/Asteroides'
import { 
  obtenerFechas,
  aplanarAsteroides,
  transformarAsteroides,
  ordenarAsteroides,
  filtrarPeligrosos, 
  filtrarRapidos
} from './logic'
import { obtenerAsteroides } from './api'
import './App.css'

function App() {
  const [filtro, setFiltro] = useState("todos")
  const [asteroides, setAsteroides] = useState([])
  let asteroidesVisibles = asteroides

  if (filtro === "peligrosos") {
    asteroidesVisibles = filtrarPeligrosos(asteroides)
  } else if (filtro === "rapidos") {
    asteroidesVisibles = filtrarRapidos(asteroides)
  }

  return (
    <>
      <Header/>
      <main>
        <Informacion numero = {0} distancia = {0}/>
        <section>
          <h2>Explorar asteroides</h2>
          <Filtros filtro = {filtro} cambiarFiltro = {setFiltro}/>
          <Asteroides asteroides = {asteroidesVisibles}/>
        </section>
      </main>
    </>
  )
}

export default App
