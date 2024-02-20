const mongoose = require('mongoose');

const URL = `mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`;

async function connectDatabase() {
  try {
    await mongoose.connect(URL);
    console.log(`Conectado ao banco de dados: ${process.env.DB_NAME}`);
  }catch (err) {
    console.error(`Erro ao conectar ao banco de dados: ${err.message}`);
  }
}

module.exports = { mongoose, connectDatabase };