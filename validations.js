//nueva dependencia @hapi/joi
const joi = require("@hapi/joi");

//register validation
const validateRegister = (data) => {
    const schema = joi.object({
        name: joi.string().alphanum().min(3).max(30).required(),
        lastName: joi.string().min(3).max(50).required(),
        email: joi.string().min(3).max(30).required().email(),
        password: joi.string().min(3).max(30).required(),
    });
    return schema.validate(data);
};
const ValidateLogin = (data) => {
    const schema = joi.object({
        email: joi.string().min(3).max(30).required().email(),
        password: joi.string().min(3).max(30).required(),
    });
    return schema.validate(data);
};

module.exports.validateRegister = validateRegister;