const mongoose = require('mongoose');

const URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.oezihp4.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`

async function connectDatabase() {
  try {
    console.log(`Tentando se conectar ao banco de dados...`)
    await mongoose.connect(URL);
    console.log(`Conectado ao banco de dados com sucesso`);
  }catch (err) {
    console.error(`Erro ao conectar ao banco de dados`);
  }
}

module.exports = { mongoose, connectDatabase };