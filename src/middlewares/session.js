const expressSession = require('express-session');

function session() {
  return expressSession({
    name: 'sessionID',
    secret: process.env.SESSION_SECRET || 'secret',
    resave: true,
    saveUninitialized: false,
  });
}

module.exports = session;