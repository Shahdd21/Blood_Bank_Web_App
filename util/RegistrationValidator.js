const Ajv = require("ajv").default;
const ajv = new Ajv();

const schema = {
  "type":"object",
  "properties": {
     
    "fname":{
      "type":"string",
      "pattern":"^[A-Z][a-z]*$"
    },

    "lname":{
        "type":"string",
      "pattern":"^[A-Z][a-z]*$"
    },

    "ssn":{
        "type":"string",
        "minLength":14,
        "maxLength":14
    }
    ,
    "email": {
      "type": "string",
      "pattern": ".+@.+\\..+"
    },
    "password": {
      "type": "string",
      "minLength": 7
    }
  },
  "required": ["fname","lname","ssn","email", "password"]
};


module.exports = ajv.compile(schema);