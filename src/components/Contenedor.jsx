export default function Contenedor({ titulo, valor, comentario }) {
    return (
        <div className = "contenedor_informacion">
            <h3>{titulo}</h3>
            <p className = "valor">{valor}</p>
            <p className = "comentario">{comentario}</p>
        </div>
    ) 
}
