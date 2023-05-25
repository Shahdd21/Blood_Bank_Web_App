const Ajv = require("ajv").default;
const ajv = new Ajv();

const schema = {
  "type":"object",
  "properties": {
    "email": {
      "type": "string",
      "pattern": ".+@.+\\..+"
    },
    "password": {
      "type": "string",
      "minLength": 7
    }
  },
  "required": ["email", "password"]
};


module.exports = ajv.compile(schema);