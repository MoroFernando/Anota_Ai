const bcrypt = require('bcrypt');
const User = require('../models/usersModel');
const { model } = require('mongoose');

exports.cadastro = async (req, res) => {
  try {
    // RECEBENDO DADOS DO FORMULÁRIO
    const email = req.body.emailCadastro;
    const nome = req.body.nomeCadastro;
    const senha = req.body.senhaCadastro;
    const confirmarSenha = req.body.confirmarSenhaCadastro;

    // BUSCA CADASTRO JA EXISTENTE
    if(await User.findOne({ email })){
      req.flash('error_msg', 'Email já cadastrado');
      return res.render('auth');

    }else {
      // HASH NA SENHA
      const hashSenha = await bcrypt.hash(senha, 10);

      // CRIANDO USUÁRIO
      const newUser = await User.create({ nome, email, senha: hashSenha });
      req.session.User = newUser;
      req.flash('success_msg', 'Usuário cadastrado com sucesso');
      res.redirect('/');
    }
  } catch(err){
    console.error(err);
    req.flash('error_msg', 'Erro inesperado');
    return res.render('auth');
  }
};

exports.listAllUsers = async (req, res) => {
  try{
    const Allusers = await User.find().sort({ email: 'asc' }).lean();
    res.render('users', { users: Allusers });
  }catch(err){
    console.error(err);
    req.flash('error_msg', 'Erro inesperado');
    return res.redirect('/');
  }
};