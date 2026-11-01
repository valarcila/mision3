import Contenedor from './Contenedor'
import { formatearNumero } from '../logic'

export default function Informacion({ numero, distancia }) {
    return (
        <section>
            <h2>Información semanal</h2>
            <div className = "informacion">
                <Contenedor 
                    titulo = "Asteroides detectados" 
                    valor = {numero} 
                    comentario = "en la última semana"
                />
                <Contenedor 
                    titulo = "Distancia mínima" 
                    valor = {formatearNumero(distancia)} 
                    comentario = "km"
                />                
            </div>
      </section>
    )
}
