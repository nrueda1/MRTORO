const {Router} = require("express");
const router = Router();
const {Register_producto} = require("./../controller/controller_tp_productos");



router.post("/producto", Register_producto);

module.exports = router;