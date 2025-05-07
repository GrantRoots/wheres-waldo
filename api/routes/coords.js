const coordsRouter = require("express").Router();
const coordsController = require("../controllers/coords");

coordsRouter.get("/", coordsController.check);
coordsRouter.post("/", coordsController.post);

module.exports = coordsRouter;
