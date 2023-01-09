a) ¿Cuál es la función de los componentes y servicios? (i.e. cuándo se debe utilizar cada uno de ellos)
* Los componentes se deben utilizar para mostrar datos en la interfaz y para manejar las interacciones de los usuarios con ésta, es decir, deben estar enfocados a en la presentación de datos.
* Los servicios se usarán cuado se necesite obtener o enviar datos al servidor, para encapsular lógica de la aplicación que no pertenece sólo a un componente y/o necesites compartir datos entre componentes. 

b) ¿Qué es la <<inyección de dependencias>>? ¿Para qué sirve el decorador @Injectable?
* La inyección de dependencias es un patrón de diseño orientado a objetos el cual nos permite suministrar objetos a clases en lugar de ser la propia clase quien cree esos objetos. Nuestros componentes no crean instancias de los servicios, sino que delega en Angular que traiga las que necesita de las que están registradas a nivel de aplicación.
* El decorador @Injectable define una clase como un servicio permitiendo así que se inyecte en cualquier componente como una dependencia.

c) Explica los siguientes conceptos de la programación reactiva que se usan en RxJS:
* Observable: Nos permite tratar con flujos que emiten datos para que cualquier parte pueda hacer el papel de observadora en este flujo y realizar operaciones y transformaciones en los eventos emitidos por él.
* Subscription: Es un objeto que representa un recurso desechable, normalmente la ejecución de un Observable.
* Operators: Son funciones y hay dos tipos:
  * Pipeable: los que pueden hacer "pipe" con Observables usando la sintaxis `observableInstance.pipe(operator()).`. No cambian la instancia existente del Observable, sino que crean una nueva basada en el primer Observable. Por ejemplo filter, mergeMap, etc.
  * Creation: pueden ser llamados como funciones standalone para crear nuevos Observables, por ejemplo of(1,2,3)
* Subject: Es una clase especial de Observable que permite valores que pueden ser distribuidos a múltiples Observers
* Schedulers: Controla cuando una subscripción comienza y cuando las notificaciones se envían, se compone de:
  
  1. Estructura de datos que guarda y encola tareas basadas en prioridades y otros criterios.
  2. Contexto de ejecución que indica cuándo y dónde se ejecutó la tarea.
  3. Un reloj (virtual) para dar noción temporal al método now().
  
d) ¿Cuál es la diferencia entre promesas y observables?

Mientras la promesa devuelven un único resultado, los Observables nos permiten definir una secuencia a partir de todos lo métodos que nos ofrecen.

e) ¿Cuál es la función de la tubería (pipe) async?

Nos permite cargar una lista como lista de observables y gestionar la asincronía directamente en la capa de presentación.