const express = require('express') // import the express modules/package
const router = express.Router() 
const sellinNaijaController = require('../controllers/sellinNaijacontroller'); 

//this APP Routes 

router.get('/', sellinNaijaController.homepage); 



module.exports = router; 