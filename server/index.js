const express = require('express'),
        app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const categoriasRoutes = require('./routes/categoriaRoutes');
const librosRoutes = require('./routes/libroRoutes');
const cestaRoutes = require('.routes/cestaRoutes');

app.use('/api/categorias', categoriasRoutes);
app.use('api/libros', librosRoutes);
app.use('/api/cesta', cestaRoutes);

const port = 3000;
app.listen(port);

console.log(`Servidor está corriendo en: ${port}`);