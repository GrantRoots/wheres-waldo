const prisma = require("../prisma");

async function getCoords() {
  try {
    return await prisma.positions.findMany();
  } catch (error) {
    throw error;
  }
}

async function postWinner(name, time) {
  try {
    await prisma.records.create({
      data: {
        name: name,
        time: parseInt(time),
      },
    });
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getCoords,
  postWinner,
};
