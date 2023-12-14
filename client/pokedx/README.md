<h1 align="center">Cliente PokeDX-Austral.cz</h1>


## 📲 Descripción:

Este cliente maneja información solicitada desde al servidor mediante la URL http://localhost:3001/ para poder gestionar un PokeDX. A continuación se detalla los módulos y su responsabilidad:

### Index
En el archivo `index.js`, se renderiza la App con su correspondiente configuración de Redux para gestionar el estado global.

### App
En el archivo `app.js` se establece la configuración con React e Ionic para estilos y enrutamiento.

### Views
En la carpeta Views se gestionan las vistas de Landing y Home. El componente Home gestiona las cards mediante la importación de cardsContainer.


### Redux
En la carpeta Redux se gestiona la información y su estado, el cual es solicitada al servidor, para su utilización en el componente cardsContainer.


### CardsContainer
En la carpeta CardsContainer se gestiona la información solicitada del servidor, se gestiona otras funcionalidades como el refresco mediante el deslizamiento de la pantalla, gestión del paginado y la comunicación con el logo de la toolbar de home para retornar a la página principal.

### Card
En la carpeta Card se gestiona estructura de cada pokemon.

### Instalación y configuración😎
Paso 1: realizar `npm install`
Paso 2: ingresar `npm start`
Paso 3: disfruta de la información

Corre en el puerto.\
[http://localhost:3000](http://localhost:3000).

