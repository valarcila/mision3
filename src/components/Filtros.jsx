import { FILTROS } from '../filtros'

const BOTONES = [
    { filtro: FILTROS.TODOS, texto: "Todos" },
    { filtro: FILTROS.PELIGROSOS, texto: "Peligrosos" },
    { filtro: FILTROS.RAPIDOS, texto: "Rápidos" }
]

export default function Filtros({ filtro, cambiarFiltro }) {
    return (
        <div className = "filtros">
            {BOTONES.map(boton => (
                <button
                    type = "button"
                    key = {boton.filtro}
                    className = {filtro === boton.filtro ? "activo" : ""}
                    onClick = {() => cambiarFiltro(boton.filtro)}
                >
                    {boton.texto}
                </button>
            ) )}
        </div>
    )
}
