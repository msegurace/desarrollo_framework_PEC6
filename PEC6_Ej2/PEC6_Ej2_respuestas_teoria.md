a. ¿Cuál es la diferencia entre definir un servicio usando el decorador @Injectable o @NgModule?
Con @Injectable, el servicio estará accesible desde cualquier parte de la aplicación, con @NgModule se puede especificar que no se pueda usar un servicio si no se importa un módulo determinado.

b. ¿Qué otras opciones admiten el decorador @Injectable para la propiedad ProvidedIn?

`providedIn: "root" | "any" | "platform"`

¿Para qué sirven las otras configuraciones?
* platform: singleton especial que será compartido por todas las aplicaciones de la página.
* any: Será inyectado en cada módulo que lo significa que pueden haber varias instancias del servicio corriendo.

