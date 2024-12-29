const express = require('express'),
        app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const categoriasRoutes = require('./routes/categoriaRoutes');

app.use('/api/categorias', categoriasRoutes);

const port = 3000;
app.listen(port);

console.log(`Servidor está corriendo en: ${port}`);