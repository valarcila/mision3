import Asteroide from './Asteroide'

export default function Asteroides({ asteroides }) {
    return (
        <div className = 'contenedor_asteroides'>
            {asteroides.length === 0 ? (
                <p>Sin datos</p>
            ) : (
                asteroides.map(asteroide =>(
                    <Asteroide key = {asteroide.id} asteroide = {asteroide}/>
                ))
            )}
        </div>
    )
}
