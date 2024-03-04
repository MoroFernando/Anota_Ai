// MOMENT (DATE FORMATER) -------------------------------------------------------------------
const moment = require('moment');

module.exports = {
  
  not: function(value){
    return !value;
  },

  json: function(objectHandlebars) {

    jsonString = JSON.stringify(objectHandlebars)
    .replace(/'/g, '\\\'')  // trata aspas simples
    .replace(/"/g, '\\\"');  // trata aspas duplas

    return jsonString;
  },

  equal: function(a, b) {
    return a === b;
  },

  date: function(date) {
    const data = moment(date).locale('pt-br').format('D [de] MMMM [às] HH:mm');
    return data;
  }

}