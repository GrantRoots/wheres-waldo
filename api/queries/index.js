const prisma = require("../prisma");

async function postInitialCoords(coords) {
  try {
    await prisma.positions.upsert({
      where: {
        id: 1,
      },
      update: {
        waldo: {
          top: coords.waldo.top,
          bottom: coords.waldo.bottom,
          left: coords.waldo.left,
          right: coords.waldo.right,
        },
        wizard: {
          top: coords.wizard.top,
          bottom: coords.wizard.bottom,
          left: coords.wizard.left,
          right: coords.wizard.right,
        },
        wilma: {
          top: coords.wilma.top,
          bottom: coords.wilma.bottom,
          left: coords.wilma.left,
          right: coords.wilma.right,
        },
        odlaw: {
          top: coords.odlaw.top,
          bottom: coords.odlaw.bottom,
          left: coords.odlaw.left,
          right: coords.odlaw.right,
        },
        woof: {
          top: coords.woof.top,
          bottom: coords.woof.bottom,
          left: coords.woof.left,
          right: coords.woof.right,
        },
      },
      create: {
        waldo: {
          top: coords.waldo.top,
          bottom: coords.waldo.bottom,
          left: coords.waldo.left,
          right: coords.waldo.right,
        },
        wizard: {
          top: coords.wizard.top,
          bottom: coords.wizard.bottom,
          left: coords.wizard.left,
          right: coords.wizard.right,
        },
        wilma: {
          top: coords.wilma.top,
          bottom: coords.wilma.bottom,
          left: coords.wilma.left,
          right: coords.wilma.right,
        },
        odlaw: {
          top: coords.odlaw.top,
          bottom: coords.odlaw.bottom,
          left: coords.odlaw.left,
          right: coords.odlaw.right,
        },
        woof: {
          top: coords.woof.top,
          bottom: coords.woof.bottom,
          left: coords.woof.left,
          right: coords.woof.right,
        },
      },
    });
  } catch (error) {
    throw error;
  }
}

module.exports = {
  postInitialCoords,
};
