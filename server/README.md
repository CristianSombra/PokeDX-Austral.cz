<h1 align="center">Servidor PokeDX-Austral.cz</h1>


## Descripción:

Este servidor maneja información solicitada desde la https://pokeapi.co/docs/graphql para poder gestionar un PokeDX. A continuación se detalla los módulos y su responsabilidad:

### Index
En el archivo `index.js`, se establece el puerto mediante el cual el servidor estará escuchando las solicitudes entrantes.

### App
En el archivo `app.js` se establece y configura el servidor. Se utiliza Express para crear una instancia del servidor y configuración de middlewares.

### Route
En el archivo `routes.js` se establece y gestiona la ruta que se encarga de dirigir las solicitudes hacia el handler correspondiente.


### Handler
En el archivo `handlers.js` se establece y gestiona la respuesta a las solicitudes y la conexión con los controladores.


### Controller
En el archivo `controllers.js` se establece y gestiona la comunicación con la API y se realiza el formateo de datos para el consumo que se requiere.
