const prisma = require("../prisma");

async function getCoords() {
  try {
    await prisma.positions.findMany();
  } catch (error) {
    throw error;
  }
}

async function postCoords(coords) {
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
          right: coordsRouter.waldo.right,
        },
        wizard: {
          top: coords.wizard.top,
          bottom: coords.wizard.bottom,
          left: coords.wizard.left,
          right: coordsRouter.wizard.right,
        },
        wilma: {
          top: coords.wilma.top,
          bottom: coords.wilma.bottom,
          left: coords.wilma.left,
          right: coordsRouter.wilma.right,
        },
        odlaw: {
          top: coords.odlaw.top,
          bottom: coords.odlaw.bottom,
          left: coords.odlaw.left,
          right: coordsRouter.odlaw.right,
        },
        woof: {
          top: coords.woof.top,
          bottom: coords.woof.bottom,
          left: coords.woof.left,
          right: coordsRouter.woof.right,
        },
      },
      create: {
        waldo: {
          top: coords.waldo.top,
          bottom: coords.waldo.bottom,
          left: coords.waldo.left,
          right: coordsRouter.waldo.right,
        },
        wizard: {
          top: coords.wizard.top,
          bottom: coords.wizard.bottom,
          left: coords.wizard.left,
          right: coordsRouter.wizard.right,
        },
        wilma: {
          top: coords.wilma.top,
          bottom: coords.wilma.bottom,
          left: coords.wilma.left,
          right: coordsRouter.wilma.right,
        },
        odlaw: {
          top: coords.odlaw.top,
          bottom: coords.odlaw.bottom,
          left: coords.odlaw.left,
          right: coordsRouter.odlaw.right,
        },
        woof: {
          top: coords.woof.top,
          bottom: coords.woof.bottom,
          left: coords.woof.left,
          right: coordsRouter.woof.right,
        },
      },
    });
  } catch (error) {
    throw error;
  }
}

module.exports = {
  postCoords,
};
