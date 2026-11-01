// una hora
const CACHE_DURACION = 1000

export function guardarCache(key, value) {
    const caducidad = Date.now() + CACHE_DURACION
    const cache = { data: value, caducidad }

    try {
        // convertir objeto js en string json
        localStorage.setItem(key, JSON.stringify(cache))
    } catch (error) {
        // avisar por la consola
        console.warn(`No se han podido guardar los datos en caché: ${error}`)
    }
}

export function consultarCache(key) {
    try {
        // obtener datos guardados
        const data = localStorage.getItem(key)

        if (data === null) return null

        // convertir string json en objeto js
        const cache = JSON.parse(data) 
        
        // si ha pasado una hora, consultar
        if (Date.now() >= cache.caducidad) {
            localStorage.removeItem(key)
            return null
        }
        return cache.data
    } catch {
        // eliminar datos corruptos
        localStorage.removeItem(key)
        return null
    }
}
