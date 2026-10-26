import { useState, useEffect } from 'react'
import { obtenerAsteroides } from '../api'
import { 
    obtenerFechas,
    aplanarAsteroides,
    transformarAsteroides,
    ordenarAsteroides
} from '../logic'

export default function useAsteroides() {
    const [asteroides, setAsteroides] = useState([])
    const [cargando, setCargando] = useState(true)
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

                if (!controller.signal.aborted) setAsteroides(ordenados)

            } catch (e) {
                if (!controller.signal.aborted) setError(e.message)
            } finally {
                if (!controller.signal.aborted) setCargando(false)
            }
        }

        cargarAsteroides()

        return () => {controller.abort()}
    }, [])

    return { asteroides, cargando, error }
}
