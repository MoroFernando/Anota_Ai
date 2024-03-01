module.exports = {
  
  not: function(value){
    return !value;
  },

  json: function(objectHandlebars) {

    jsonString = JSON.stringify(objectHandlebars);

    return jsonString;
  }

}