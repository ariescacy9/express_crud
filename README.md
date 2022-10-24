# CRUDS
## postgres y express

### se hace la coneccion con una base de datos hecha en postgres y SBeaver
### se instala express sequalize cors pg con npm
### se instala nodemon 
### se instala npm i dotenv -D  para usar variables de entorno para la conexion

### se instala npm jwt y bcrypt para la autentificacion de usuario y la encriptacion de la contraseña JSON web tokens

- se muestra el registro de un usuario
![App Screenshot](https://github.com/ariescacy9/express_crud/blob/main/img/register.JPG?raw=true)
![App Screenshot](https://github.com/ariescacy9/express_crud/blob/main/img/addUser.JPG?raw=true)

- se muestra login del usuario
![App Screenshot](https://github.com/ariescacy9/express_crud/blob/main/img/login.JPG?raw=true)

- se muestra la decodificion del encriptado
![App Screenshot](https://github.com/ariescacy9/express_crud/blob/main/img/encriptacion_comprobacion.JPG?raw=true)

### crear el archivo .env y poner las variables similares al archivo .env_sample

### se crea el modelo y controlador para cada tabla


- se muestra la base la tabla cursos inicial
![App Screenshot](https://github.com/ariescacy9/express_crud/blob/main/img/tablaCursos.JPG?raw=true)

- se muestra la consulta GET con postman con autenticacion usuario
![App Screenshot](https://github.com/ariescacy9/express_crud/blob/main/img/mostrarCursosAutentificado.JPG?raw=true)

- se muestra la cnsulta GET por id
![App Screenshot](https://github.com/ariescacy9/express_crud/blob/main/img/busquedaID.JPG?raw=true)

- se ingresa nuevo curso con POST
![App Screenshot](https://github.com/ariescacy9/express_crud/blob/main/img/crearCurso.JPG?raw=true)

- se actualiza el nombre del curso algebra por id con PUT
![App Screenshot](https://github.com/ariescacy9/express_crud/blob/main/img/actualizandoCurso.JPG?raw=true)

- se elimina un curso por id con DELETE
![App Screenshot](https://github.com/ariescacy9/express_crud/blob/main/img/eliminarCurso.JPG?raw=true)

- se muestra la tabla final despues de las consultas CRUD
![App Screenshot](https://github.com/ariescacy9/express_crud/blob/main/img/datosActualizados.JPG?raw=true)
