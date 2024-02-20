const database = require('../config/database').mongoose;
const User = require('../models/usersModel');

const noteSchema = database.Schema({
  titulo: {
    type: String
  },
  conteudo: {
    type: String
  },
  user_id: {
    type: database.Schema.Types.ObjectId,
    ref: User.modelName
  }
})

const Nota = database.model('Notas', noteSchema);

module.exports = Nota;