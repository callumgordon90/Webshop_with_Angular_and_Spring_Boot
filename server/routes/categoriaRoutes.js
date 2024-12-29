const { Router } = require('express');
let categorias = require('../models/categorias.json');

const router = Router();
router.get('/', function(req, res){
    res.json({"datos" : categorias});
});

module.exports = router;