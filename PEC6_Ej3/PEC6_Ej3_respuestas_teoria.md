a) ¿Qué son los interceptores?
Nos brindan un mecanismo para interceptar y/o mutar las solicitudes y respuestas http. Interceptará las solicitudes HTTP antes de que se envíen al servidor, para agregar información a las request, manipular datos, o hacer log de las responses entre otras utilidades. 

b) Analiza la siguiente cadena de operadores de RxJS, explica cada uno de los
pasos que se están desarrollando y explica en qué caso usarías este código:

this.wines$ = this.searchSubject 
 .startWith(this.searchTerm) //1
 .debounceTime(300)  //2
 .distinctUntilChanged() //3
 .merge(this.reloadProductsList) //4
 .switchMap((query) => //5
this.wineService.getWine(this.searchTerm));//6

1. Indicamos que busque los vinos que comiencen por los caracteres escritos por el usuario.
2. Le indicamos al stream que espere hasta que no haya nuevos eventos durante 300 milisegundos asegurándonos que se haga la llamada sólo cuando el usuario deje de escribir durantes esos 300 milisegundos.
3. Nos asegura que sólo se harán llamadas si el nuevo valor es diferente al valor anterior ahorrando llamadas innecesarias al servidor.
4. Se suscribe al observable que nos devuelve this.reloadProductsList en paralelo tan pronto como éste emita valores.
5. Crea un Observable interno para cada valor que recibe desde la fuente de datos, en este caso lo que devuelve this.wineService.getWine(this.searchTerm).