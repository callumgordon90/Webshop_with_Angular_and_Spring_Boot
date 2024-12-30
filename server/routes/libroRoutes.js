const {Router} = require('express');
let libros = require('../models/libros.json');
const router = Router();

//Metodo GET api/libros, que retorna todos los libros
router.get('/', function(req, res){
    res.json({"datos" : libros});
});

//Metodo POST api/libros/filtros, que retorna todos los libros, pero filtrados por el idCategoria
// que vendra en el Body de la peticion.
router.post('/filtro', function(req, res){
    let lista = libros;
    if (req.body.idCategoria){
        lista = lista.filter(libro => libro.idCategoria == +req.body.idCategoria);
    }
    res.json({"datos":lista});
});

//Metodo GET api/libros/tituloAutor?valor=xxx, que filtra por el titulo o autor del libro.
//El valor va indicado como parametro en la Url
router.get('tituloAutor', function(req, res){
    let lista = libros;
    if(req.query.valor){
        lista = lista.filter(libro=> libro.titulo.indexOf(req.query.valor) >= 0 ||
        libro.autor.indexOf(req.query.valor) >= 0);
    }
    res.json({"datos" : lista});
});

//Metodo GET api/libros/idLibro. Retorna el libro cuyo identificador es idLibro.
router.get('/:idLibro', function(req, res){
    let lista = libros;
    if(req.params.idLibro){
        let lista = libros;
        if(req.params.idLibro){
            let filtrados = lista.filter(libro => libro.idLibro == +req.params.idLibro);
            if(filtrados.length > 0){
                res.json({"datos" : filtrados[0]});
            }
        }
        res.status(404).json({"mensaje":"Libro no encontrado"});
    }
});

module.exports = router;