const express = require("express");
const router_login = express.Router();
const {Auth} =  require('../controller/controller_login');

     
router_login.post('/auth',Auth);

module.exports = router_login