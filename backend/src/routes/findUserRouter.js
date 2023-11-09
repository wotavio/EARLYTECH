// Importar o modulo de Router do express
const { Router } = require('express');
// Instanciar o Router na variável router
const router = Router();
// Importar as funções (processamento da requisição) do controller
const { findUser } = require('../controllers/findUserContreller');
 
router.post('/findUser', findUser);
 
module.exports = router;