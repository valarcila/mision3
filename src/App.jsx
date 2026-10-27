import { useState } from 'react'
import Asteroides from './components/Asteroides'
import Filtros from './components/Filtros'
import Header from './components/Header'
import Informacion from './components/Informacion'
import useAsteroides from './hooks/useAsteroides'
import './App.css'
import { calcularDistanciaMinima, filtrarAsteroides } from './logic'

const CARGANDO_MENSAJE = "Cargando..." 
const TODOS_FILTRO = "todos"

function App() {
  const [filtro, setFiltro] = useState(TODOS_FILTRO)
  const { asteroides, cargando, error } = useAsteroides()

  // informacion
  const numero = asteroides.length
  const distanciaMinima = calcularDistanciaMinima(asteroides)

  const visibles = filtrarAsteroides(asteroides, filtro)

  return (
    <>
      <Header/>
      <main>
        <Informacion numero = {numero} distancia = {distanciaMinima} />
        <section>
          <h2>Explorar asteroides</h2>
          <Filtros filtro = {filtro} cambiarFiltro = {setFiltro} />
          {cargando ? (
            <p>{CARGANDO_MENSAJE}</p>
          ) : error ? (
            <p role = "alert">{error}</p>
          ) : (
            <Asteroides asteroides = {visibles} />
          )}
        </section>
      </main>
    </>
  )
}

export default App
