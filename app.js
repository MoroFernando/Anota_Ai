//PATH -------------------------------------------------------------------------
const path = require('path');

// DOTENV ----------------------------------------------------------------------
const dotenv = require('dotenv');
dotenv.config();

// EXPRESS ---------------------------------------------------------------------
const express = require('express');
const app = express();

// DATABASE --------------------------------------------------------------------
const connectDatabase = require('./src/config/database').connectDatabase;
connectDatabase();

// MIDDLEWARES -----------------------------------------------------------------
const session = require('./src/middlewares/session');
const sessionUser = require('./src/middlewares/sessionUser');
const flash = require('connect-flash');
const flashMessages = require('./src/middlewares/flashMessages');

app.use(
  express.json(), 
  express.urlencoded({ extended: true }),
  express.static('public'),
  session(),
  sessionUser(),
  flash(),
  flashMessages()
);

// TEMPLATE ENGINE -------------------------------------------------------------
const handlebars = require('./src/config/handlebars');
app.engine('hbs', handlebars());
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src', 'views'));

// ROTAS -----------------------------------------------------------------------
const routes = require('./src/routes/routes');
app.use(routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});