const joi = require("@hapi/joi");
const { Segments } = require("celebrate");
const { baseString } = require("../baseValidators");

const messengerValidation = {
  telegram: baseString,
  instagram: baseString,
};

exports.addContactValidation = {
  [Segments.BODY]: {
    first_name: baseString,
    last_name: baseString,
    email: baseString,
    phone: joi.number(),
    position: baseString,
    additional: baseString,
    telegram: baseString,
    instagram: baseString
  },
};
