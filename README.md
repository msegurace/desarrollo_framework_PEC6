**Login UOC:** msegurace

**Nombre y Apellidos:** Moisés Segura Cedrés

**Descripción:** PEC6.

**Ejercicio 2:** 
* He cambiado wine.model para sacar la lógica de la creación uuid() al servicio.
* He tenido problemas con algunas funciones "deprecadas" como por ejemplo: `throwError`
* Para hacer más legible el código he usado un alias en los imports de "of" y "throw" 
import { of as ObservableOf } from 'rxjs'
import { throw as ObservableThrow } from 'rxjs'; 
* Tuve problemas con el método .subscribe porque también daba "deprecated" debido a que ya no espera argumentos de callback sino un observer.


Ejercicio 4:
No refresca
pierde el valor después de refresh

