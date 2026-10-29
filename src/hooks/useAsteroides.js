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
    const [ reintentos, setReintentos ] = useState(0)

    function reintentar() {
        setReintentos(r => r + 1)
    }

    useEffect(() => {
        const controller = new AbortController()

        setEstado(ESTADOS.CARGANDO)
        setError(null)

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
    }, [reintentos])

    return { asteroides, estado, error, reintentar }
}
