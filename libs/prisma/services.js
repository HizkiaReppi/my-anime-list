import bcrypt from 'bcrypt';
import prisma from './prisma';
import userValidation from '@/libs/validations/user.validation';

export const signup = async payload => {
	const { error } = await userValidation.signup.validateAsync(payload);
	if (error) throw new Error(error.message);

	const hashedPassword = await bcrypt.hash(payload.password, 10);

	const data = {
		name: payload.name,
		email: payload.email,
		password: hashedPassword,
	};

	const user = await getUserByColumn({ email: data.email });

	if (user) throw new Error('Username telah terdaftar');

	const result = await prisma.user.create({
		data,
	});

	return result;
};

export const getAllUser = async ({ take = 10, page = 1 }) => {
	const { error } = await userValidation.getAllUser.validateAsync({
		take,
		page,
	});

	if (error) throw new Error(error.message);

	const users = await prisma.user.findMany({
		take,
		skip: take * (page - 1),
	});

	return users;
};

export const getUserByColumn = async where => {
	const { error } = await userValidation.getUserByColumn.validateAsync({
		where,
	});

	if (error) throw new Error(error.message);

	const user = await prisma.user.findUnique({
		where,
	});

	return user;
};
