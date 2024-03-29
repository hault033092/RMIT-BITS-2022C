//Validation
const Joi = require('@hapi/joi')

const registerValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
    role: Joi.string(),
    name: Joi.string(),
  })
  return schema.validate(data)
}

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  })
  return schema.validate(data)
}

const passwordValidate = (data) => {
  const schema = Joi.object({
    password: Joi.string().min(6).required(),
  })
  return schema.validate(data)
}

module.exports.registerValidation = registerValidation
module.exports.loginValidation = loginValidation
module.exports.passwordValidate = passwordValidate
