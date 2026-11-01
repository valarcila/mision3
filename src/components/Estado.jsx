import Mensaje from "./Mensaje"

export default function Estado({ estado, reintentar }) {
    return (
        <div className = "estado">
            <Mensaje estado = {estado} reintentar = {reintentar}/>
        </div>
    )
}
