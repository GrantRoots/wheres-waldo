const db = require("../queries/index");

async function sendInitalCoords(req, res, next) {
  try {
    await db.postInitialCoords(req.body);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  sendInitalCoords,
};
