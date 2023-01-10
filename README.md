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


**Ejercicio 4**:
* Tuve problemas guardando las cantidades de botellas ya que al refrescar se perdían, finalmente lo pude solucionar haciendo subscribe() al método changeQuantity.
* No logré que cuando se hace submit para añadir un vino, se vea en el listado sin tener que refrescar, supongo que tendré que hacer algo más que se me escapa ahora mismo.

**Ejercicio 5**:
* Para poner el símbolo de Euro detrás del número, además de usar el pipe currency, 
  
    <code>{{ wine.price|currency:'EUR':true}}</code>
  
  he configurado el idioma local con:

    <code>
    import { registerLocaleData } from '@angular/common';<br/>
    import localeEs from '@angular/common/locales/es';<br/>
    registerLocaleData(localeEs);
    </code>

* Creo el pipe nullimages para la segunda parte de este ejercicio y quito el validador de la url de la imagen para que se puedan crear vinos sin valor en este campo. Cuando se crean si valor, se muestra la botella sin número correctamente.

 