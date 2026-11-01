import { useState } from 'react'
import Asteroides from './components/Asteroides'
import Busqueda from './components/Busqueda'
import Estado from './components/Estado'
import Filtros from './components/Filtros'
import Header from './components/Header'
import Informacion from './components/Informacion'
import useAsteroides from './hooks/useAsteroides'
import './App.css'
import { ESTADOS } from './estados'
import { FILTROS } from './filtros'
import { 
  calcularDistanciaMinima, 
  filtrarAsteroides,
  buscarAsteroides
} from './logic'

function App() {
  const [filtro, setFiltro] = useState(FILTROS.TODOS)
  const [busqueda, setBusqueda] = useState("")
  const { asteroides, estado, reintentar } = useAsteroides()

  // informacion
  const numero = asteroides.length
  const distanciaMinima = calcularDistanciaMinima(asteroides)

  const filtrados = filtrarAsteroides(asteroides, filtro)
  const visibles = buscarAsteroides(filtrados, busqueda)

  return (
    <>
      <Header 
        titulo = "Near Earth Object Web Service"
        subtitulo = "Asteroids NeoWs (NASA)"
        autora = "Valeria Arcila Rodríguez"
      />
      <main>
        <Informacion numero = {numero} distancia = {distanciaMinima} />
        <section>
          <h2>Explorar asteroides</h2>
          <Busqueda busqueda = {busqueda} cambiarBusqueda = {setBusqueda}/>
          <Filtros filtro = {filtro} cambiarFiltro = {setFiltro} />
          <Estado estado = {estado} reintentar = {reintentar} />
          {/* asteroides si cargado */}
          {estado.status === ESTADOS.CARGADO &&
            <Asteroides asteroides = {visibles} />
          }
        </section>
      </main>
    </>
  )
}

export default App
