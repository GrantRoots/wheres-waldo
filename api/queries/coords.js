const prisma = require("../prisma");

async function getCoords() {
  try {
    return await prisma.positions.findMany();
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getCoords,
};
