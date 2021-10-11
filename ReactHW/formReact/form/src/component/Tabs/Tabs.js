import React, { useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Form } from "../Login/LogInForm";
import Box from '@mui/material/Box';
import { SignUp } from "../SignUp/SignUpForm";
import { WrapperForm } from "./TabStyle";



export default function FormLoginAndSignUp() {
	const [value, setValue] = useState(0);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (<>
		<WrapperForm>
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
				<Tabs value={value} onChange={handleChange} centered>
					<Tab label="Log in" />
					<Tab label="Sign up" />
				</Tabs>
			</Box>
			{value === 0 && <Form />}
			{value === 1 && <SignUp />}
		</WrapperForm>
	</>
	)
}