import Joi from 'joi';

export default {
	signup: Joi.object().keys({
		email: Joi.string().email().required(),
		name: Joi.string()
			.regex(/^[a-zA-Z ]+$/)
			.required(),
		password: Joi.string().min(6).required(),
		confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
	}),
	signin: Joi.object().keys({
		email: Joi.string().email().required(),
		password: Joi.string().required(),
	}),
	getAllUser: Joi.object().keys({
		take: Joi.number().default(10),
		page: Joi.number().default(1),
	}),
	getUserByColumn: Joi.object().keys({
		where: Joi.object().required(),
	}),
};
