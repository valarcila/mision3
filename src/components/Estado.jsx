const CARGANDO_MENSAJE = "Cargando"
const CARGADO_MENSAJE = "Cargado correctamente"

export default function Estado({ estado, reintentar }) {
    // mapa de vistas
    const vistas = {
        cargando: <p className = "cargando">{CARGANDO_MENSAJE}</p>,
        error: (
            <>
                <p>{estado.error}</p>
                <button type = "button" id = "reintentar" onClick = {reintentar}>
                    Reintentar
                </button>
            </>
        ),
        cargado: <p>{CARGADO_MENSAJE}</p>
    }

    return (
        <div className = "estado">
            {vistas[estado.status]}
        </div>
    )
}
