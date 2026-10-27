const FILTROS = [
    { filtro: "todos", texto: "Todos" },
    { filtro: "peligrosos", texto: "Peligrosos" },
    { filtro: "rapidos", texto: "Rápidos" },
]

export default function Filtros ({ filtro, cambiarFiltro }) {
    return (
        <div className = "filtros">
            {FILTROS.map(opcion => (
                <button
                    type = "button"
                    key = {opcion.filtro}
                    className = {filtro === opcion.filtro ? "activo" : ""}
                    aria-pressed = {filtro === opcion.filtro}
                    onClick = {() => cambiarFiltro(opcion.filtro)}
                >
                    {opcion.texto}
                </button>
            ) )}
        </div>
    )
}
