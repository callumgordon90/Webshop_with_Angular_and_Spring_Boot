const express = require('express'),
        app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const categoriasRoutes = require('./routes/categoriaRoutes');
const librosRoutes = require('./routes/libroRoutes');
const cestaRoutes = require('./routes/cestaRoutes');
const pedidosRoutes = require('./routes/pedidoRoutes');

app.use('/api/categorias', categoriasRoutes);
app.use('api/libros', librosRoutes);
app.use('/api/cesta', cestaRoutes);
app.use('/api/pedidos', pedidosRoutes);

const port = 3000;
app.listen(port);

console.log(`Servidor está corriendo en: ${port}`);

