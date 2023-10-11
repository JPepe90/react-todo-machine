# Desarrollo

1. Se crearon los componentes Todo a forma de maquetar la aplicacion de forma rudimentaria.

2. Utilizando props se parametrizó la comunicacion base entre componentes padre a hijo y se utilizaron sus atributos. Aqui se utilizó el primer array de base para las tareas hardcodeado.

3. Se agregó css por tags y por class. Dentro de estas estan las funciones que agregan las clases css de tarea completada.

4. Agregado de eventos basicos e interacciones con consola.

5. Definiciones de valores de estado [state, setState] para varios usos como el search y el items list.

6. Manejo de estados derivados para el calculo de valores en funcion de estados momentaneos como por ejemplo el contador de tareas totales y completadas.

7. Funciones actualizadoras de estado para completar tareas y eliminar tarea.

##### --------------------------

8. Iconos utilizando react-icons:

>> npm install react-icons --save


#### ---------------------------
2/10

# Effects para manejo de asincronia en React

Con el uso apropiado damos una mejor experiencia de usuario mientras suceden procesos asincronos (usando states) y ademas volvemos a renderizar solamente cuando se actualiza un nuevo estado de los efectos.

Opciones:
  - Si el estado loading es true estamos cargando.
  - Si error es true, tuvimos un error.
  - Si no estamos cargando y el length del array de elementos es 0 entonces informar que se cargue el primer pendiente.
  - Si no se cumple ninguna de las anteriores, mostrar la lista de tareas.