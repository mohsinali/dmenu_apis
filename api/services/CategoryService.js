module.exports = {
  getCategories: function(options, done){
    Category.find()
      .then(function(categories){
        done(categories);        
      })
      .catch(function(err){})
  },


}