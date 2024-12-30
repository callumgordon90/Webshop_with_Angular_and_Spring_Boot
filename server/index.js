const express = require('express'),
        app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const categoriasRoutes = require('./routes/categoriaRoutes');
const librosRoutes = require('./routes/libroRoutes');

app.use('/api/categorias', categoriasRoutes);
app.use('api/libros', librosRoutes);

const port = 3000;
app.listen(port);

console.log(`Servidor está corriendo en: ${port}`);