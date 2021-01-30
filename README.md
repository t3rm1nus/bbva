# Login bbva

Proyecto generado con [Ionic](https://ionicframework.com/)

## Instrucciones de instalación

- Descargar los archivos o clonar el repo ejecutando `git clone https://github.com/t3rm1nus/bbva.git`  
- Ejecutar en un terminal `npm run server` para levantar el servidor de mocks en el puerto 3000
- Ejecutar en otro terminal `ionic serve` para levantar la aplicación en http://localhost:8100/


## Instrucciones de aplicación 

Existen dos usuarios para poder logarse:
- user@bbva.com
- admin@bbva.com
(la clave que se introduzca es indiferente aunque requerida)

## Explicación y tecnologías
Para hacer esta demo he decidido usar por primera vez Ionic (ya que era un ejercicio pensado específicamente para móviles) y así aprovechar la parte de maquetación responsive con los elementos nativos de Ionic.

La aplicación consta de dos pantallas: pantalla de login y la pantalla de cuenta. 

Se ha usado Ngrx (react para angular), y el flujo de petición de datos sería el siguiente:

VISTA  --------->  COMPONENTE             
post   --------->  store dispatch   ---------> acción  ---------> efecto

el flujo al recibir los datos sería así:

efecto   --------->  acción  --------->  reducer --------->  nuevo estado  ---------> COMPONENTE  ---------> ACTUALIZAR VISTA

El formulario de login es reactivo y he programado lass validaciones de los dos campos.
 
La página de cuenta está protegida por un guard (auth.guard) de tal manera que si se intenta entrar a la página sin pasar por el login primero o se recarga estando en ella, detecta que no se se está acreditado correctamente y se redirige al login de nuevo.

Al hacer click en el botón de login se dispara el submit del formulario y se hace una petición al servidor de mocks en http://localhost:3000/users y comprueba que el usuario establecido exista en el json. 

Hay dos usuarios en el JSON, (uno normal user@bbva y uno con permisos de admin admin@bbva.com)
Aparte del nombre de usuario, al recuperar el servicio trae este árbol de info:
    id: "1",
    username: "admin",
    email: "admin@admin.com",
    isadmin: true,
    lastconnect: null,

La variable isadmin indica si es user o admin y la variable lastconnect estaría pensada para almacenar la fecha de la última conexión.

Para mantener la escalabilidad de los proyectos suelo tener carpetas con componentes reutilizables, cada uno de ellos tiene su contenedor y su componente de tal modo que toda la lógica va en los contenedores y el componente solo pinta y recibe eventos. Así consigo mantener una capa de abstracción funcional que permite ampliar y mantener el código de manera límpia y sencilla incluso para los mas juniors.

El store está configurado para trabajar todo solo en un State, (ya que esta demo no requeria de muchos datos).
Habitualmente en las aplicaciones grandes lo que suelo hacer es extender el state root con mas states (suelo hacer uno por módulo)

En la carpeta app/pages/login/resources se encuentra tanto el guard, como el servicio que llama al mock.

Se ha añadido también un literal en la página de cuenta para distinguir si el usuario logado es normal o admin y también he parseado el email para que se vea el nombre del usuario al logarse.

## Testing
Ejecutar `ng test` para pasar los test unitarios ( no he desarrollado test nuevos pero he depurado todos los que crea angular por defecto )


