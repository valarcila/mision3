import { useState, useEffect } from 'react'
import { obtenerAsteroides } from '../api'
import { ESTADOS } from '../estados'
import { 
    obtenerFechas,
    aplanarAsteroides,
    transformarAsteroides,
    ordenarAsteroides
} from '../logic'

export default function useAsteroides() {
    const [asteroides, setAsteroides] = useState([])
    const [estado, setEstado] = useState(ESTADOS.CARGANDO)
    const [error, setError] = useState(null)

    useEffect(() => {
        const controller = new AbortController()

        async function cargarAsteroides() {
            try {
                const { inicio, fin } = obtenerFechas()

                const a = await obtenerAsteroides(inicio, fin, controller.signal)
                const aplanados = aplanarAsteroides(a)
                const transformados = transformarAsteroides(aplanados)
                const ordenados = ordenarAsteroides(transformados)

                if (!controller.signal.aborted) {
                    setEstado(ESTADOS.CARGADO)
                    setAsteroides(ordenados)
                }
            } catch (e) {
                if (!controller.signal.aborted) {
                    setEstado(ESTADOS.ERROR)
                    setError(e.message)
                }
            }
        }
        cargarAsteroides()

        return () => {controller.abort()}
    }, [])

    return { asteroides, estado, error }
}
