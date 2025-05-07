const indexRouter = require("express").Router();
const indexController = require("../controllers/index");

indexRouter.post("/", indexController.sendInitalCoords);

module.exports = indexRouter;
