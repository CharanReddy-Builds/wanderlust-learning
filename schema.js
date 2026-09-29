const Joi = require("joi");

const listingSchema = Joi.object({
    title:Joi.string().required(),
    description:Joi.string().required(),
    image:Joi.string().required().allow("",null),
    price:Joi.number().required().min(0),
    location:Joi.string().required(),
    country:Joi.string().required()
}).required()

const reviewSchema= Joi.object({
     rating:Joi.number().required().min(1).max(5),
     comment:Joi.string().required(),
     createdAt:Joi.date().allow('')

}).required()
module.exports={listingSchema,reviewSchema};