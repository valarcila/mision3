import { ESTADOS } from '../estados'
import Asteroides from './Asteroides'

const CARGANDO_MENSAJE = "Cargando"
const CARGADO_MENSAJE = "Cargado correctamente"

export default function Estado({ asteroides, estado, error }) {
    return (
        <>
            {estado === ESTADOS.CARGANDO ? (
                <p>{CARGANDO_MENSAJE}</p>
            ) : estado === ESTADOS.ERROR ? (
                <p>{error}</p>
            ) : (
                <>
                    <p>{CARGADO_MENSAJE}</p>
                    <Asteroides asteroides = {asteroides} />
                </>
            )}
        </>
    )
}