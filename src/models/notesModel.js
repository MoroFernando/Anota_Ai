const database = require('../config/database').mongoose;
const User = require('../models/usersModel');

const noteSchema = database.Schema({
  titulo: {
    type: String
  },
  conteudo: {
    type: String
  },
  data_criacao: {
    type: Date,
    default: Date.now
  },
  finalizada: {
    type: Boolean,
    default: false
  },
  user_id: {
    type: database.Schema.Types.ObjectId,
    ref: User.modelName,
    required: true
  }
})

const Nota = database.model('notas', noteSchema);

module.exports = Nota;