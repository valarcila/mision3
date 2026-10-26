import { useState } from 'react'
import Asteroides from './components/Asteroides'
import Filtros from './components/Filtros'
import Header from './components/Header'
import Informacion from './components/Informacion'
import useAsteroides from './hooks/useAsteroides'
import { 
  calcularDistanciaMinima,
  filtrarPeligrosos, 
  filtrarRapidos
} from './logic'
import './App.css'

function App() {
  const [filtro, setFiltro] = useState("todos")
  const { asteroides, cargando, error } = useAsteroides()

  // informacion
  const numero = asteroides.length
  const distanciaMinima = calcularDistanciaMinima(asteroides)

  // filtrar asteroides
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
        <Informacion numero = {numero} distancia = {distanciaMinima}/>
        <section>
          <h2>Explorar asteroides</h2>
          <Filtros filtro = {filtro} cambiarFiltro = {setFiltro}/>
          {cargando ? (
            <p>Cargando...</p>
          ) : error ? (
            <p role = "alert">{error}</p>
          ) : (
            <Asteroides asteroides = {asteroidesVisibles}/>
          )}
        </section>
      </main>
    </>
  )
}

export default App
