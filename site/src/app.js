const express = require('express');
const app = express();
const methodOverride = require('method-override');

const path = require('path');
const publicPath = path.resolve(__dirname, "../../public");
app.use(express.static(publicPath));

// Express session
const session = require ('express-session')
app.use (session ({
    secret:"secret",
    resave: false,
    saveUninitialized: true,
}));

const auth = require('./middlewares/auth');
app.use(auth);

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

//Formularios
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'));

//Rutas
 const movieRoutes=require('./routes/movieRoutes');
 const userRoutes=require('./routes/userRoutes');

app.use('/home', movieRoutes); 
app.use('/', movieRoutes);
app.use('/movies', movieRoutes);
app.use('/users', userRoutes);

