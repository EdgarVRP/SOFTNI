# SOFTNI

 Front End del Marco de Servicios Web en una SOFOM, Tesis de Maestria CENIDET de Edgar Valentin Ruiz Padilla

####Se inicializa el proyecto nodeJS

```
npm init
```

###Se instalan los paquetes a utilizar
####Para los servicios CRUD (repo que sirvio de base https://github.com/infodp/crud_mongodb) para administrar usuarios

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

    - 0-loginDB.js
  - controllers

    - 1-userController.js
  - models

    - 1-userModel.js
  - routes

    - 0-loginRoutes.js
  - views

    - uploadFileService.js

##Se añaden archivos para el login

```
touch src/db/0-loginDB.js
touch src/models/0-loginModel.js
touch src/routes/0-loginRoutes.js


```

###Para el servicio de login (nodejs-passport-local https://github.com/FaztWeb/nodejs-passport-local)

Instrucciones video: https://www.youtube.com/watch?v=uVltgEcjNww&t=2103s

```
npm i ejs connect-flash morgan passport passport-local express-session
Para el encriptamiento:
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
"dev":"nodemon src/app.js"
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
