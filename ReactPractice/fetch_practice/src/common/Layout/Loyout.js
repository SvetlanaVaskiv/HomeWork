import React, { useContext } from "react";
import { LayoutWrapper } from "./LayoutStyles";
import { ThemeContext } from "../../context/theme.js";

export const Layout = ({ children }) => {
	const context = useContext(ThemeContext);

	return (
		<LayoutWrapper theme={context.theme} onClick={() => context.switchTheme(context.theme)}>

			<div
				style={{
					textTransform: "uppercase",
					cursor: "pointer",
					textAlign: "end"
				}}
			></div>
			{children}
		</LayoutWrapper>
	);
};