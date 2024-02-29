const express_handlebars = require('express-handlebars');

function handlebars() {
  return express_handlebars.engine({
    helpers: require('./helpersHandlebars'),
    defaultLayout: 'main',
    layoutsDir: 'src/views/layouts',
    extname: '.hbs'
  });
}

module.exports = handlebars;