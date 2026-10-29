import { useState } from 'react'
import Estado from './components/Estado'
import Filtros from './components/Filtros'
import Header from './components/Header'
import Informacion from './components/Informacion'
import useAsteroides from './hooks/useAsteroides'
import './App.css'
import { FILTROS } from './filtros'
import { calcularDistanciaMinima, filtrarAsteroides } from './logic'

function App() {
  const [filtro, setFiltro] = useState(FILTROS.TODOS)
  const { asteroides, estado, error } = useAsteroides()

  // informacion
  const numero = asteroides.length
  const distanciaMinima = calcularDistanciaMinima(asteroides)

  const visibles = filtrarAsteroides(asteroides, filtro)

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
          <Filtros filtro = {filtro} cambiarFiltro = {setFiltro} />
          <Estado estado = {estado} error = {error} asteroides = {visibles} />
        </section>
      </main>
    </>
  )
}

export default App
