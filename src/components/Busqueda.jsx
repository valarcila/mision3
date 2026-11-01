export default function Busqueda({ busqueda, cambiarBusqueda }) {
    return (
        <div className = "contenedor_busqueda">
            <label htmlFor = "buscar">Buscar asteroides</label>
            <input 
                type = "text"
                id = "buscar"
                placeholder = "uw13"
                value = {busqueda}
                onChange = {event => cambiarBusqueda(event.target.value)}
            />
        </div>
    )
}
