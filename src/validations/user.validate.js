import Joi from "joi";

const userValidate = Joi.object({
  username: Joi.string()
    .min(2)
    .max(25)
    .required()
    .regex(/^[a-zA-Z]+$/)
    .messages({
      "string.pattern.base":
        "username: must not contain other than alphabetic charecters",
    }),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .messages({
      "string.email": "email: is not valid (.net or .com is allowed)",
    })
    .required(),
  password: Joi.string().min(6).required(),
});

export default userValidate;
