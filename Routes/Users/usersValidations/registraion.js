const Joi = require("joi");

function validateRegistration(user) {
  const schema = Joi.object({
    firstName: Joi.string().min(2).max(15).required(),
    middleName: Joi.string().min(2).max(15).allow("").optional(),
    lastName: Joi.string().min(2).max(15).required(),
    phone: Joi.string()
      .regex(/^[0-9]{10}$/)
      .message("Phone number must have 10 digits.")
      .required(),
    email: Joi.string()
      .max(256)
      .required()
      .email({ tlds: { allow: false } }),
    password: Joi.string()
      .pattern(
        new RegExp(
          "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{0,}$"
        )
      )
      .min(8)
      .messages({
        "string.pattern.base": `Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character from @$!%*?&.`,
      })
      .max(15)
      .required(),
    imageUrl: Joi.string()
      .pattern(
        new RegExp(
          "^(https?://)?[^\\s/]+\\.[^\\s/]+/\\S+\\.(jpg|jpeg|png|gif)$"
        )
      )
      .message("Image url is not valid")
      .allow("")
      .optional(),
    imageAlt: Joi.string().max(256).allow("").optional(),
    state: Joi.string().max(256).allow("").optional(),
    country: Joi.string().min(2).max(256).required(),
    city: Joi.string().min(2).max(256).required(),
    street: Joi.string().min(2).max(256).required(),
    houseNumber: Joi.string().min(1).max(256).required(),
    zip: Joi.string().max(256).allow("").optional(),
  });

  return schema.validate(user);
}

module.exports = validateRegistration;
