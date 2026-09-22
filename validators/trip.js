import { body } from "express-validator";
import { ValidationError } from "../errors/validation";
import { validate } from "./validate";

export const tripValidator = [
  body("title")
    .notEmpty()
    .withMessage("Title can not be empty")
    .isLength({ min: 4 })
    .withMessage("Title must be at least 4 characters long")
    .trim()
    .escape(),
  body("startDate")
    .notEmpty()
    .withMessage("Start date can not be empty")
    .isDate()
    .withMessage("Invalid start date")
    .trim()
    .escape(),
  body("endDate")
    .notEmpty()
    .withMessage("End date can not be empty")
    .isDate()
    .withMessage("Invalid end date")
    .trim()
    .escape()
    .custom((value, { req }) => {
      if (value < req.body.startDate) {
        throw new ValidationError("end date must be after start date");
      }
      return true;
    }),
  body("destination")
    .notEmpty()
    .withMessage("Destination can not be empty")
    .isArray({ min: 1 })
    .withMessage("Destination must be an array ")
    .trim()
    .escape()
    .custom((value) => {
      return value.every((d) => typeof d === "string");
    })
    .withMessage("Every item in destination must be string."),
  body("budget.total")
    .notEmpty()
    .withMessage("Total budget must not be empty")
    .isNumeric()
    .withMessage("Total budget must be a number")
    .trim()
    .escape(),
  body("budget.spent")
    .optional()
    .isNumeric()
    .withMessage("spend budget must be number")
    .trim()
    .escape(),
  body("budget.expences.*.name").optional().trim().escape(),
  body("budget.expenses.*.amount")
    .optional()
    .isNumeric()
    .withMessage("Budget expense must be a number")
    .trim()
    .escape(),
  validate,
];
export const updatetripValidator = [
  body("title")
    .optional()
    .isLength({ min: 4 })
    .withMessage("Title must be at least 4 characters long")
    .trim()
    .escape(),
  body("startDate")
    .optional()
    .isDate()
    .withMessage("Invalid start date")
    .trim()
    .escape(),
  body("endDate")
    .optional()
    .isDate()
    .withMessage("Invalid end date")
    .trim()
    .escape()
    .custom((value, { req }) => {
      if (value < req.body.startDate) {
        throw new ValidationError("end date must be after start date");
      }
      return true;
    }),
  body("destination")
    .optional()
    .isArray({ min: 1 })
    .withMessage("Destination must be an array ")
    .trim()
    .escape()
    .custom((value) => {
      return value.every((d) => typeof d === "string");
    })
    .withMessage("Every item in destination must be string."),
  body("budget.total")
    .optional()
    .isNumeric()
    .withMessage("Total budget must be a number")
    .trim()
    .escape(),
  body("budget.spent")
    .optional()
    .isNumeric()
    .withMessage("spend budget must be number")
    .trim()
    .escape(),
  body("budget.expences.*.name")
    .optional()
    .trim()
    .escape(),
  body("budget.expenses.*.amount")
    .optional()
    .isNumeric()
    .withMessage("Budget expense must be a number")
    .trim()
    .escape(),
  validate,
];
