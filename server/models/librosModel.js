let LIBROS = require('./libros.json');
//Metodo para obtener una lista de todos los libros
const getLibros = () => LIBROS;

//Metodo para obtener un libro a partir de su identificador
const getLibro = (idLibro) => LIBROS.find((libro)=>libro.idLibro === idLibro);

//Metodo para obtener una lista de libros cuyo titulo o autor contenga el valor indicado por parametro
const getLibroByTituloAutor = (valor) =>
        LIBROS.filter((libro)=>libro.titulo.indexOf(valor) >= 0 || libro.autor.indexOf(valor) >= 0);

module.exports = {
    getLibros,
    getLibro,
    getLibroByTituloAutor
}