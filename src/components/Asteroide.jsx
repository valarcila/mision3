export default function Asteroide({ asteroide }) {
    return (
        <div className = "asteroide">
            <h3>{asteroide.nombre}</h3>
            <p>Distancia: {asteroide.distancia.toFixed(0)} km</p>
            <p>Velocidad: {asteroide.velocidad.toFixed(0)} km/h</p>
            {/* 3 decimales */}
            <p>Diámetro: {asteroide.diametro.toFixed(3)} km</p>
            <p className = {asteroide.peligroso ? "peligroso" : "seguro"}>
                {asteroide.peligroso ? "Potencialmente peligroso" : "No peligroso"}
            </p>
        </div>
    )
}
