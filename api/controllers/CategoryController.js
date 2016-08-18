/**
 * CategoryController
 *
 * @description :: Server-side logic for managing categories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  /**
   * `CategoriesController.index()`
  */
  index: function (req, res) {
    CategoryService.getCategories("", function(cats){      
      return res.json(cats);
    })

  }

};

