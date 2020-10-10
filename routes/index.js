var express = require("express");
var router = express.Router();

const controller = require("./controller");
const { get } = require("./validator");
const Joi = require("joi");
const middleware = require("../middlewares/middleware");


router.get("/", middleware(get.joiSchema), controller.get);

module.exports = router;
