import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { TextStyle, FormStyle } from './LogInStyle';

const validationSchema = yup.object({
	email: yup
		.string('Enter your email')
		.email('Enter a valid email')
		.required('Email is required'),
	password: yup
		.string('Enter your password')
		.min(8, 'Password should be of minimum 8 characters length')
		.required('Password is required'),
});

export const Form = () => {
	const formik = useFormik({
		initialValues: {
			email: 'foobar@example.com',
			password: 'foobar',
		},
		validationSchema: validationSchema,
		onSubmit: () => {
			alert("In progress");
		},
	});
	return (
		<div>
			<TextStyle> Log In</TextStyle>
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
						id="password"
						name="password"
						label="Password"
						type="password"
						value={formik.values.password}
						onChange={formik.handleChange}
						error={formik.touched.password && Boolean(formik.errors.password)}
						helperText={formik.touched.password && formik.errors.password}
					/>
					<Button color="success" variant="contained" fullWidth type="submit">
						Submit
					</Button>
				</FormStyle>
			</form>
		</div>
	);
};

