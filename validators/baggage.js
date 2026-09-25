import { body } from "express-validator";
import { validate } from "./validate";


export const createBaggageValidator = [
 body("name")
  .notEmpty()
  .withMessage("name cannot be empty")
  .isLength({min:2})
  .withMessage("name ,ust be atleast 2 character" )
  .trim()
  .escape(),
body("completed")
  .optional()
  .isBoolean()
  .withMessage(" must be boolean ")
  .trim()
  .escape(),
  validate
]
 export const updateBaggageValidator = [
  body("name")
  .optional
  .isLength({min:2})
  .withMessage("name must be atleast 2 character" )
  .trim()
  .escape(),
  body("completed")
  .optional()
  .isBoolean()
  .withMessage(" must be boolean ")
  .trim()
  .escape(),
  validate
 ]