Practica:

1. Lista de productos
Esta vista debe mostrar al entrar por primera vez a ella una
búsqueda o una serie de productos default. Además de tener una
barra de búsqueda que permita buscar resultados específicos.
La lista de productos consta de un grid que muestra una serie de
tarjetas con la información de cada uno de los productos que son
el resultado de la búsqueda. Cada tarjeta debe mostrar el título y
precio del producto en cuestión.
Al dar click en la tarjeta de un producto nos debe llevar a la
pantalla de detalle del producto.
2. Detalle de producto
Esta pantalla debe mostrar más información del producto al que se
dió click en la lista de resultados o de productos. Puede mostrar
una imagen más grande del producto así como una descripción o
más información relacionada
3. (Deseable) Home con Login
Si se desarrolla, esta pantalla debe ser siempre la primera a la que
entre un usuario para autenticarse con cualquier método de tu
preferencia (correo y contraseña, Google, etc.). Además, deberás
revisar que un usuario que no esté logueado no pueda acceder a
ninguna otra de las pantallas previamente listadas.
4. (Deseable) Deploy
Si se realiza el deploy deben anexarse la liga para poder ver el
proyecto en línea. Se pueden recurrir a plataformas como Vercel o
Netlify las cuales son gratuitas.


Uso:

clona o descargar el repositorio
Ejecuta: npm install
Ejecuta el json server en una consola de comandos: npm run server
Ejecuta el servidor en una consola de comandos: npm start

Nota: Cada servicio debe ser levantadao por separado.

consume la api disponible en http://localhost:3001
Endpoints:

Buscar productos: http://localhost:3001/products

Para generar tus propias consultas visit el siguiente repositorio: https://github.com/typicode/json-server.

Deploy de aplicación: https://prueba-tecnica-liv.herokuapp.com/products