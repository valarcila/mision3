export default function Filtros ({ filtro, cambiarFiltro }) {
    return (
        <div className = "filtros">
            <button
                type = "button"
                className = {filtro === "todos" ? "activo" : ""}
                onClick = {() => cambiarFiltro("todos")}>
                Todos
            </button>
            <button
                type = "button"
                className = {filtro === "peligrosos" ? "activo" : ""}
                onClick = {() => cambiarFiltro("peligrosos")}>
                Peligrosos
            </button>
            <button 
                type = "button"
                className = {filtro === "rapidos" ? "activo" : ""}
                onClick = {() => cambiarFiltro("rapidos")}>
                Rápidos
            </button>
        </div>
    )
}
