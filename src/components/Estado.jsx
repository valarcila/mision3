import { ESTADOS } from '../estados'

const CARGANDO_MENSAJE = "Cargando"
const CARGADO_MENSAJE = "Cargado correctamente"

export default function Estado({ estado, reintentar }) {
    return (
        <div className = "estado">
            {mensaje({ estado, reintentar })}
        </div>
    )
}

function mensaje({ estado, reintentar }) {
    switch (estado.status) {
        case ESTADOS.CARGANDO: 
            return <p className = "cargando">{CARGANDO_MENSAJE}</p>
        case ESTADOS.ERROR: 
            return (
                <>
                    <p>{estado.error}</p>
                    <button type = "button" className = "reintentar" onClick = {reintentar}>
                        Reintentar
                    </button>
                </>
            )
        case ESTADOS.CARGADO: 
            return <p>{CARGADO_MENSAJE}</p>
        default:
            return null
    }
}
