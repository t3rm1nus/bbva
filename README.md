# Login bbva

This project was generated with [Ionic](https://ionicframework.com/)

## Instrucciones de instalación

- Descargar los archivos o clonar el repo ejecutando `git clone https://github.com/t3rm1nus/bbva.git`  
- Ejecutar en un terminal `npm run server` para levantar el servidor de mocks en el puerto 3000
- Ejecutar en otro terminal `ionic serve` para levantar la aplicacion en http://localhost:8100/


## Instrucciones de aplicación 

Existen dos usuarios para poder logarse:
- user@bbva.com
- admin@bbva.com
(la clave que se introduzca es indiferente aunque requerida)

## Explicación y tecnologias
Para hacer esta demo he decidido usar por primera vez Ionic (ya que era un ejercicio pensado especificamente para móviles) y así aprovechar la parte de maquetación responsive con los elementos nativos de Ionic.

La aplicación consta de dos pantallas, el login y la pantalla de cuenta. 

Para el flujo de funcionamiento se ha usado Ngrx (react para angular), al iniciar carga la aplicación y el formulario de login reactivo, los dos campos tienen validaciones activas, los dos son campos requeridos y además el campo email tiene validacion de formato de mail. 

La pagina de cuenta esta protegida por un guard (auth.guard) de tal manera que si se intenta entrar a la página sin pasar por el login primeo o se recarga estando en ella detecta que no se se está acreditado correctamente y se redirige al login de nuevo.

Al hacer click en el botón de login se dispara el submit del formulario y se hace una petición al servidor de mocks en http://localhost:3000/users y compara que el usuario establecido exista en el json. 

Hay dos usuarios en el JSON, (uno normal user@bbva y uno con permisos de admin admin@bbva.com)
Aparte del nombre de usuario, al recuperar el servicio trae este arbol de info:
    id: "1",
    username: "admin",
    email: "admin@admin.com",
    isadmin: true,
    lastconnect: null,

La variable isadmin me indica si es user o admin y la variable lastconnect estaría pensada para almacenar la fecha de la ultima conexión.

La estructura del proyecto está realizada así porque solo eran dos páginas, habitualmente en proyectos grandes la cosa cambia lo suelo dividir en componentes y contenedores de tal manera que el contenedor lleva toda la lógica de mercado y el componente se queda sin lógica y se encarga solo del render de los datos y de lanzar las acciones y pasarselas al contenedor.

El store también tiene un uso ligero, trabajando todo solo en un State, (cuando las aplicaciones crecen suelo hacer states diferenciados que hacen extend al del root)

En la carpeta app/pages/login/resources se encuentra tanto el guard, como el servicio que llama al mock.

Se ha añadido también un literal en la página de cuenta para distinguir si el usuario logado es normal o admin y también he parseado el email para que se vea el nombre del usuario al logarse.

## Testing
Ejecutar `ng test` para pasar los test unitarios ( no he desarrollado test nuevos pero he depurado todos los que crea angular por defecto )


