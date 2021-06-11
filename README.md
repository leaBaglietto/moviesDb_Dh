# moviesDb_Dh - CINE ZETA
Challenge DH Final para realizar un CRUD de películas. 

Para la instalación. 
1. Tener node instalado de forma global.

2. npm init. (configurar el proyecto con los datos correspondientes)

3. instalar los siguientes modulos.
npm install bcryptjs
express (modulos necesarios para manejar todo el servidor, ruteo, controllers, path, etc)
express-session (para manejar sesiones de usuarios)
express-validator (No seria necesario por que el challenge no tiene para hacer validaciones en backend, si me da el tiempo las hago pero en front)
method-override (para manejar metodos put y delete)
mysql2
sequelize.


*¡NOTA IMPORTANTE!* le realice una pequeña modificacion a la base de datos que me enviaron les aviso por si no les funciona, sequilize no me tomaba las columnas created_at o update_at y las tuve que cambiar por createdAt idem con update. Tambien Agregue la columna DeletedAt para realizar el paranoid. 


Usuario admin
usuario: lean@lean.com
pass: 123
