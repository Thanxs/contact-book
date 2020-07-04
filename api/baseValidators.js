const joi = require("@hapi/joi");

exports.baseString = joi.string().trim().allow("");

exports.objectId = joi
  .string()
  .trim()
  .regex(/^[0-9a-f]{24}$/i);
