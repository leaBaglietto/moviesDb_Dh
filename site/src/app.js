const express = require('express');
const path = require('path');
const app = express();

// Configuracion de servidor local

app.listen (3030, () => {
    console.log ('-------- BIENVENIDOS CINE ZETA --------');
    console.log ('El mejor catalogo de películas en http://localhost:3030');
    console.log ('--- #silloneandoConCineZeta ---')
});

// --- Configuracion ---

// LLAMAMOS A EJS PARA QUE SEA NUESTRO TEMPLATE ENGINE
app.use(express.static('../public'));
app.set('view engine', 'ejs');
app.set('views', './views');

//Rutas
 const movieRoutes=require('./routes/movieRoutes');


app.use('/', movieRoutes);
app.use('/detailMovie', movieRoutes);
app.use('/register', movieRoutes);
app.use('/login', movieRoutes); 

app.use('/movieCreate', movieRoutes);