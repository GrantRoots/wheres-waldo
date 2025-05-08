const checkRouter = require("express").Router();
const checkController = require("../controllers/check");

checkRouter.post("/", checkController.checkSubmit);
checkRouter.post("/win", checkController.postWin);

module.exports = checkRouter;
