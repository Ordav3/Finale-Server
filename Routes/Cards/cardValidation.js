const Joi = require("joi");

function validateCard(card) {
  const schema = Joi.object({
    title: Joi.string().min(2).max(256).required(),
    subTitle: Joi.string().min(2).max(256).required(),
    description: Joi.string().min(2).max(1024).required(),
    phone: Joi.string().min(9).max(14).required(),
    email: Joi.string()
      .min(6)
      .max(256)
      .required()
      .email({ tlds: { allow: false } }),
    web: Joi.string().min(5).max(255).allow(""),
    url: Joi.string().max(1024).allow(""),
    alt: Joi.string().max(256).allow(""),
    state: Joi.string().max(256).allow(""),
    country: Joi.string().min(2).max(256).required(),
    city: Joi.string().min(2).max(256).required(),
    street: Joi.string().min(2).max(256).required(),
    houseNumber: Joi.number().min(1).max(9999).required(),
    zip: Joi.string().min(1).max(256).allow(null),
  });
  return schema.validate(card);
}

exports.validateCard = validateCard;
