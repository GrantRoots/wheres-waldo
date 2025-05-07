const db = require("../queries/coords");

async function checkSubmit(req, res, next) {
  try {
    const coords = await db.getCoords();
    const x = req.body.clicked.x;
    const y = req.body.clicked.y;

    if (
      x > coords.waldo.left &&
      x < coords.waldo.right &&
      y < coords.waldo.top &&
      y > coords.waldo.bottom
    ) {
      return "waldo";
    }
    if (
      x > coords.wizard.left &&
      x < coords.wizard.right &&
      y < coords.wizard.top &&
      y > coords.wizard.bottom
    ) {
      return "wizard";
    }
    if (
      x > coords.wilma.left &&
      x < coords.wilma.right &&
      y < coords.wilma.top &&
      y > coords.wilma.bottom
    ) {
      return "wilma";
    }
    if (
      x > coords.odlaw.left &&
      x < coords.odlaw.right &&
      y < coords.odlaw.top &&
      y > coords.odlaw.bottom
    ) {
      return "odlaw";
    }
    if (
      x > coords.woof.left &&
      x < coords.woof.right &&
      y < coords.woof.top &&
      y > coords.woof.bottom
    ) {
      return "woof";
    }
    return false;
  } catch (error) {
    next(error);
  }
}

module.exports = {
  checkSubmit,
};
