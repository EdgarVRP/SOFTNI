# SOFTNI

 Marco de Servicios Web en una SOFOM, Tesis de Maestria CENIDET

####Se inicializa el proyecto nodeJS

```
npm init
```

###Se instalan los paquetes a utilizar
####Para los servicios CRUD (repo que sirvio de base https://github.com/infodp/crud_mongodb)

```
npm i dotenv
npm i ejs
npm i express
npm i mongoose
```

La estructura de carpetas queda de la siguiente manera
Se crean las carpetas:

- src
  - passport

    - local-auth.js
  - public

    - css
      - styles.css
    - js
      - app.js
  - private

    - prestatario
  - db

    - 1-userDB.js
    - 2-prestatarioDB.js
    - 3-proyectoDB.js
    - 4-proveedoresDB.js
    - 5-controlDB.js
    - 6-documentosDB.js
    - 7-indicadoresDB.js
  - controllers

    - 1-userController.js
    - 2-prestatarioController.js
    - 3-proyectoController.js
    - 4-proveedoresController.js
    - 5-controlController.js
    - 6-documentosController.js
    - 7-indicadoresController.js
  - models

    - 1-userModel.js
    - 2-prestatarioModel.js
    - 3-proyectoModel.js
    - 4-proveedoresModel.js
    - 5-controlModel.js
    - 6-documentosModel.js
    - 7-indicadoresModel.js
  - routes

    - 1-userRoutes.js
    - 2-loginRoutes.js
    - 3-altaRoutes.js
    - 4-proveedoresRoutes.js
    - 5-controlRoutes.js
    - 6-documentosRoutes.js
    - 7-indicadoresRoutes.js
  - views

    - layouts
      - main.ejs
      - footer.ejs
    - 1-userView.ejs
    - 2-loginView.ejs
    - 2-1-singupView.ejs
    - 3-altaView.ejs
    - 4-seguimientoView.ejs
    - 4-1-proveedoresView.ejs
    - 5-controlView.ejs
    - 6-documentosView.ejs
    - 7-indicadoresView.ejs
  - components

    - uploadFileService.js

Codigo para crear carpetas

```
touch .gitignore
touch request.http
touch .env
mkdir src
touch src/app.js
mkdir src/passport
touch src/passport/local-auth.js
mkdir src/public
mkdir src/public/css 
touch src/public/css/styles.css
mkdir src/public/js
touch src/public/js/code.js
mkdir src/private
mkdir src/private/prestatario
mkdir src/db
touch src/db/1-userDB.js
touch src/db/2-prestatarioDB.js
touch src/db/3-proyectoDB.js
touch src/db/4-proveedoresDB.js
touch src/db/5-controlDB.js
touch src/db/6-documentosDB.js
touch src/db/7-indicadoresDB.js
mkdir src/controllers
touch src/controllers/1-userController.js
touch src/controllers/2-prestatarioController.js
touch src/controllers/3-proyectoController.js
touch src/controllers/4-proveedoresController.js
touch src/controllers/5-controlController.js
touch src/controllers/6-documentosController.js
touch src/controllers/7-indicadoresController.js
mkdir src/models
touch src/models/1-userModel.js
touch src/models/2-prestatarioModel.js
touch src/models/3-proyectoModel.js
touch src/models/4-proveedoresModel.js
touch src/models/5-controlModel.js
touch src/models/6-documentosModel.js
touch src/models/7-indicadoresModel.js
mkdir src/routes
touch src/routes/1-userRoutes.js
touch src/routes/2-loginRoutes.js
touch src/routes/3-altaRoutes.js
touch src/routes/4-proveedoresRoutes.js
touch src/routes/5-controlRoutes.js
touch src/routes/6-documentosRoutes.js
touch src/routes/7-indicadoresRoutes.js
mkdir src/views
touch src/views/1-userView.ejs
touch src/views/2-loginView.ejs
touch src/views/2-1-singupView.ejs
touch src/views/3-altaView.ejs
touch src/views/4-seguimientoView.ejs
touch src/views/4-1-proveedoresView.ejs
touch src/views/5-controlView.ejs
touch src/views/6-documentosView.ejs
touch src/views/7-indicadoresView.ejs
mkdir src/views/layouts
touch src/views/layouts/main.ejs
touch src/views/layouts/footer.ejs
mkdir src/components
touch src/components/uploadFileService.js
```

###Para el servicio de guardar archivos en el servidor (repo "Archivos2" https://github.com/CodenautaJorge/files-js)

```
npm i mime-types
npm i multer
```

###Para el servicio de login (nodejs-passport-local https://github.com/FaztWeb/nodejs-passport-local)

Instrucciones video: https://www.youtube.com/watch?v=uVltgEcjNww&t=2103s

```
npm i ejs-mate connect-flash morgan passport passport-local express-session
probando encriptamiento:
npm i bcryptjs
INSTALADOS ANTERIORMENTE PERO SON TAMBIEN NECESARIOS
npm i express mongoose ejs
```

###Para el desarrollo de la aplicación
Se instala el paquete nodemon

```
npm i nodemon -D
```

###Para las pruebas de la aplicación

```
npm install --save-dev jest
```

Se anexa el script de nodemon en package JSON

```
"dev":"nodemon src/index.js"
```

Para correr con nodemon

```
npm run dev
```


Ejemplo de como desinstalar modulo

```
npm remove mongoose
```

Ejemplo instalando una version anterior de mongoose

```
npm i mongoose@5.2.8
```

Se añade la excepcion de carpeta modules y archivo .env en gitignore

```
/node_modules
.env
```
