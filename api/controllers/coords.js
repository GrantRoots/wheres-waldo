const db = require("../queries/coords");

async function checkSubmit(req, res, next) {
  try {
    let coords = await db.getCoords();
    coords = coords[0];
    const x = req.body.x;
    const y = req.body.y;

    if (
      x > coords.waldo.left &&
      x < coords.waldo.right &&
      y > coords.waldo.top &&
      y < coords.waldo.bottom
    ) {
      return res.json("waldo");
    }
    if (
      x > coords.wizard.left &&
      x < coords.wizard.right &&
      y > coords.wizard.top &&
      y < coords.wizard.bottom
    ) {
      return res.json("wizard");
    }
    if (
      x > coords.wilma.left &&
      x < coords.wilma.right &&
      y > coords.wilma.top &&
      y < coords.wilma.bottom
    ) {
      return res.json("wilma");
    }
    if (
      x > coords.odlaw.left &&
      x < coords.odlaw.right &&
      y > coords.odlaw.top &&
      y < coords.odlaw.bottom
    ) {
      return res.json("odlaw");
    }
    if (
      x > coords.woof.left &&
      x < coords.woof.right &&
      y > coords.woof.top &&
      y < coords.woof.bottom
    ) {
      return res.json("woof");
    }
    return res.json(false);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  checkSubmit,
};
