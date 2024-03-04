const expressSession = require('express-session');
const MomeryStore = require('memorystore')(expressSession);

function session() {
  return expressSession({
    name: 'sessionID',
    secret: process.env.SESSION_SECRET || 'secret',
    resave: true,
    saveUninitialized: false,
    cookie: { maxAge: 86400000 },
    store: new expressSession.MemoryStore( { checkPeriod : 86400000 } )
  });
}

module.exports = session;