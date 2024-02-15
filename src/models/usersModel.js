const database = require('../config/database').mongoose;

const userSchema = database.Schema({
  nome: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  senha: {
    type: String,
    required: true
  }
})

const User = database.model('User', userSchema);

module.exports = User;