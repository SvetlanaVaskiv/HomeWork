import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { TextStyle, FormStyle } from '../Login/LogInStyle.js';

const validationSchema = yup.object({
	email: yup
		.string('Enter your email')
		.email('Enter a valid email')
		.required('Email is required'),
	firstName: yup.string()
		.max(15, 'Must be 15 characters or less')
		.min(2, 'Too Short!')
		.required('Required'),
	lastName: yup.string()
		.max(20, 'Must be 20 characters or less')
		.min(2, 'Too Short!')
		.required('Required'),
});

export const SignUp = () => {
	const formik = useFormik({
		initialValues: {
			email: 'foobar@example.com',
			firstName: 'John',
			lastName: 'Doe'
		},

		validationSchema: validationSchema,
		onSubmit: (onSubmit) => {
			alert(`Thank you for sign  up. Please,check your email ${onSubmit.email}`);
		},
	});

	return (
		<div>
			<TextStyle> Sign up</TextStyle>
			<form onSubmit={formik.handleSubmit}>
				<FormStyle>
					<TextField
						fullWidth
						id="email"
						name="email"
						label="Email"
						value={formik.values.email}
						onChange={formik.handleChange}
						error={formik.touched.email && Boolean(formik.errors.email)}
						helperText={formik.touched.email && formik.errors.email}
					/>
					<TextField
						fullWidth
						id="firstName"
						name="firstName"
						label="FirstName"
						type=""
						value={formik.values.firstName}
						onChange={formik.handleChange}
						error={formik.touched.firstName && Boolean(formik.errors.firstName)}
						helperText={formik.touched.firstName && formik.errors.firstName}
					/>
					<TextField
						fullWidth
						id="lastName"
						name="lastName"
						label="LastName"
						type=""
						value={formik.values.lastName}
						onChange={formik.handleChange}
						error={formik.touched.lastName && Boolean(formik.errors.lastName)}
						helperText={formik.touched.lastName && formik.errors.lastName}
					/>
					<Button color="success" variant="contained" fullWidth type="submit">
						Submit
					</Button>
				</FormStyle>
			</form>
		</div>
	);
};

