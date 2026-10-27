import { formatearNumero } from '../logic'

const DIAMETRO_DECIMALES = 3

export default function Asteroide({ asteroide }) {
    return (
        <div className = "asteroide">
            <h3>{asteroide.nombre}</h3>
            <p>Distancia: {formatearNumero(asteroide.distancia, "km")}</p>
            <p>Velocidad: {formatearNumero(asteroide.velocidad, "km/h")}</p>
            {/* 3 decimales */}
            <p>Diámetro: {formatearNumero(asteroide.diametro, "km", DIAMETRO_DECIMALES)}</p>
            <p className = {asteroide.peligroso ? "peligroso" : "seguro"}>
                {asteroide.peligroso ? "Potencialmente peligroso" : "No peligroso"}
            </p>
        </div>
    )
}
