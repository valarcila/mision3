import { ESTADOS } from '../estados'
import Asteroides from './Asteroides'

const CARGANDO_MENSAJE = "Cargando"
const CARGADO_MENSAJE = "Cargado correctamente"

export default function Estado({ asteroides, estado, error, reintentar }) {
    return (
        <div className = "estado">
            {estado === ESTADOS.CARGANDO ? (
                <p className = "cargando">{CARGANDO_MENSAJE}</p>
            ) : estado === ESTADOS.ERROR ? (
                <>
                    <p>{error}</p>
                    <button 
                        type = "button"
                        id = "reintentar"
                        onClick = {reintentar}
                    >
                        Reintentar
                    </button>
                </>
            ) : (
                <>
                    <p>{CARGADO_MENSAJE}</p>
                    <Asteroides asteroides = {asteroides} />
                </>
            )}
        </div>
    )
}
