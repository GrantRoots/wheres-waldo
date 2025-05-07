const coordsRouter = require("express").Router();
const coordsController = require("../controllers/coords");

coordsRouter.post("/", coordsController.checkSubmit);

module.exports = coordsRouter;
