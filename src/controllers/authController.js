const bcrypt = require('bcrypt');
const User = require('../models/usersModel');

exports.signup = async (req, res) => {
  // RECEBENDO DADOS DO FORMULÁRIO
  const email = req.body.emailCadastro;
  const nome = req.body.nomeCadastro;
  const senha = req.body.senhaCadastro;
  const confirmarSenha = req.body.confirmarSenhaCadastro;

  // VALIDAÇÃO DE DADOS
  if(!email || !nome || !senha || !confirmarSenha){
    req.flash('error_msg', 'Preencha todos os campos');
    return res.redirect('/auth');
  }else if(senha !== confirmarSenha){
    req.flash('error_msg', 'Senhas não conferem');
    return res.redirect('/auth');
  }

  try {
    // BUSCA CADASTRO JA EXISTENTE
    if(await User.findOne({ email })){
      req.flash('error_msg', 'Email já cadastrado');
      return res.redirect('auth');
    }

    // HASH NA SENHA
    const hashSenha = await bcrypt.hash(senha, 10);

    // CRIANDO USUÁRIO
    const newUser = await User.create({ nome, email, senha: hashSenha });
    req.session.user = newUser;
    res.redirect('/');

  } catch(err){
    console.error(err);
    req.flash('error_msg', 'Erro inesperado');
    return res.redirect('auth');
  }
};

exports.signin = async (req, res) => {
    // RECEBENDO DADOS DO FORMULÁRIO
    const email = req.body.emailLogin;
    const senha = req.body.senhaLogin;

    // VALIDAÇÃO DE DADOS
    if (!email || !senha) {
      req.flash('error_msg', 'Preencha todos os campos');
      return res.redirect('/auth');
    }

    try {
        // BUSCA SE USUÁRIO EXISTE
        const user = await User.findOne({ email }).lean();
        if (!user) {
          req.flash('error_msg', 'Usuário não encontrado');
          return res.redirect('/auth');
        }

        // VALIDA SENHA
        if (await bcrypt.compare(senha, user.senha)) {
          req.session.user = user;
          return res.redirect('/');
        } else {
          req.flash('error_msg', 'Senha inválida');
          return res.redirect('/auth');
        }
    } catch (err) {
      console.error(err);
      req.flash('error_msg', 'Erro inesperado');
      return res.redirect('/auth');
    }
};

exports.signout = (req, res) => {
    req.session.user = null;
    res.redirect('/');
};

exports.deleteUser = async (req, res) => {
  const userId = req.params.id;

  try{
    const user = await User.findById(userId);
    if(!user){
      req.flash('error_msg', 'Usuário não encontrado');
      return res.redirect('/usuarios');
    }
    await User.deleteOne({ _id: userId });
    req.flash('success_msg', 'Usuário deletado com sucesso');
    req.session.user = null;
    return res.redirect('/usuarios');
  }catch(err){
    console.error(err);
    req.flash('error_msg', 'Erro inesperado');
    return res.redirect('/usuarios');
  }
};