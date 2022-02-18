const express = require("express");
const resgisterUser = require("../controllers/userControllers");

const router = express.Router();

router.route('/').post(resgisterUser);

module.exports = router;