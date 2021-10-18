import React, { createContext, useState, useCallback } from "react";


export const ThemeContext = createContext(); // Provider, Consumer
export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState("light");

	const switchTheme = useCallback((property) => {
		if (property !== "light") {
			setTheme("light");
		} else {
			setTheme("dark");
		}
	}, []);
	return (
		<ThemeContext.Provider value={{ theme, switchTheme, name: "Sveta" }}>
			{children}
		</ThemeContext.Provider>
	)
}
export const Count = () => {
	const [count, setCount] = useState(0);
	const nextNumber = () => setCount(count + 1);
	const prevNumber = () => setCount(count - 1)

	return {
		count,
		nextNumber,
		prevNumber
	}
}