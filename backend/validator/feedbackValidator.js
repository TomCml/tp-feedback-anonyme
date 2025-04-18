const { check } = require("express-validator");

exports.feedbackValidator = [
  check("people")
    .not()
    .isEmpty()
    .withMessage("L'objet people est requis"),
  check("people.name")
    .not()
    .isEmpty()
    .withMessage("Le nom est requis"),
  check("people.category")
    .not()
    .isEmpty()
    .withMessage("La catégorie est requise")
    .isIn(["student", "teacher"])
    .withMessage("La catégorie doit être 'student' ou 'teacher'"),
  check("feedback")
    .not()
    .isEmpty()
    .withMessage("Le message de feedback est requis")
    .trim(),
];
