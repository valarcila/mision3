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
    const [estado, setEstado] = useState({status: ESTADOS.CARGANDO, error: null})
    const [reintentos, setReintentos] = useState(0)

    function reintentar() {
        setEstado({ status: ESTADOS.CARGANDO, error: null })
        setReintentos(r => r + 1)
    }

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
                    setEstado({ status: ESTADOS.CARGADO, error: null })
                    setAsteroides(ordenados)
                }
            } catch (e) {
                if (!controller.signal.aborted) {
                    setEstado({ status: ESTADOS.ERROR, error: e.message })
                }
            }
        }
        cargarAsteroides()

        return () => {controller.abort()}
    }, [reintentos])

    return { asteroides, estado, reintentar }
}
