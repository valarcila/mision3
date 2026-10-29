import { ESTADOS } from '../estados'
import Asteroides from './Asteroides'

const CARGANDO_MENSAJE = "Cargando"
const CARGADO_MENSAJE = "Cargado correctamente"

export default function Estado({ asteroides, estado, error, reintentar }) {
    return (
        <>
            {estado === ESTADOS.CARGANDO ? (
                <p>{CARGANDO_MENSAJE}</p>
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
        </>
    )
}
