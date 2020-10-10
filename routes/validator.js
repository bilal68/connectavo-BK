const Joi = require("joi");

const get = {
  name: "",
  path: "/",
  type: "get",
  joiSchema: Joi.object({
    url: Joi.string().regex(/[http,https]:\/\/[a-zA-Z0-9_\-]+\.[a-zA-Z0-9_\-]+\.[a-zA-Z0-9_\-]+/),
  }),
};

module.exports = { get };
