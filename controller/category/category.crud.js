const categoryServices = require("../../services/category/category.crud.js");

exports.addCategory = function (req, res, next) {
  categoryServices
    .addCategory(req.body)
    .then((data) => res.status(201).json(data))
    .catch((err) => next(err));
};
