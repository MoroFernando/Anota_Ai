module.exports = {
  
  not: function(value){
    return !value;
  },

  json: function(context) {
    return JSON.stringify(context);
  }

}