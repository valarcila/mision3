# Misión 3
La idea es reconstruir la aplicación de la misión anterior, que consulta la API NeoWs de la NASA para mostrar los asteroides que se han acercado a la tierra la última semana.

## Cómo probarlo
Al abrir la aplicación aparece el número total de asteroides y la distancia mínima registrada y se muestran todos los asteroides que se han acercado a la tierra ordenados de menor a mayor distancia. 

Se puede pulsar "Todos", "Peligrosos" o "Rápidos" para filtrar los asteroides. El filtro de rápidos muestra aquellos que superan los 70000 km/h.

Los datos se guardan en `localStorage`. Al recargar la página se recuperan datos de la caché si ya estaban guardados para esas fechas. 

Si se produce un error durante la carga, aparece un mensaje y el botón "Reintentar".

## Uso de IA
Utilicé claude para resolver dudas sobre el funcionamiento de react, especialmente sobre la gestión de estados y la comunicación entre componentes.

Prompt 1. Cómo gestionar los estados

Al principio no tenía claro cómo gestionar los estados, ya que algunas variables debían utilizarse en distintos componentes. Al dividir la aplicación, me costaba entender cómo coordinarlos.

La gestión de los estados se realiza mediante `useState` y las props permiten pasar valores y funciones entre componentes, facilitando su comunicación.

Prompt 2. Cómo habilitar el botón "Reintentar"

En la misión 2 ya tenía el botón, pero al adaptar la aplicación a react no sabía cómo relacionarlo con el hook y los estados.

Creé un estado llamado `reintentos`, cuya función no es únicamente contar los reintentos, sino provocar que se vuelva a ejecutar `useEffect` cuando se incrementa su valor. 

## Autopsia
Decisión 1. Centralizar los filtros

Decidí crear un objeto de constantes, similar a un `enum` de java, utilizando `export const`.

Los valores de los filtros están definidos en un único archivo js y pueden importarse donde se necesiten, evitando repetirlos y reduciendo posibles errores.

Decisión 2. Mantener un custom hook específico.

Soy consciente de que `useAsteroides` no es un hook genérico como podría ser `useFetch`, ya que está diseñado concretamente para esta aplicación.

Sin embargo, decidí mantenerlo porque considero que su uso está justificado: reúne la lógica relacionada con la obtención de asteroides, utiliza `useState` y `useEffect` para gestionar la información y sus estados y proporciona la función `reintentar`. 
