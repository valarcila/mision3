export default function Informacion({ numero, distancia }) {
    return (
        <section>
            <h2>Información semanal</h2>
            <div className = "informacion">
                <div className = "contenedor">
                    <h3>Asteroides detectados</h3>
                    <p className = "valor">{numero}</p>
                    <p className = "comentario">en los últimos días</p>
                </div>
                <div className = "contenedor">
                    <h3>Distancia mínima</h3>
                    <p className = "valor">{distancia}</p>
                    <p className = "comentario">km</p>
                </div>
            </div>
      </section>
    )
}
