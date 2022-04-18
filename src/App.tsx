import React, { useMemo } from "react";
import "./App.css";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/pages/Login/Login";
import Home from "./components/pages/Home/Home";
import PrivateRoute from "./components/PrivateRoute";
import theme from "./themes/themeProvider";

type RoutesType = {
	path: string;
	element: JSX.Element;
	private: boolean;
};

function App() {
	const routes = useMemo(() => {
		const arr: RoutesType[] = [
			{
				path: "/pay",
				element: <Home />,
				private: true,
			},
			{
				path: "/home",
				element: <Login />,
				private: true,
			},
		];
		return arr.map((item, index) => {
			const ele = item.private ? (
				<PrivateRoute
					path={item.path}
					blockRedirect={
						item.path === "/login" || item.path === "/loginCreate"
					}
				>
					{item.element}
				</PrivateRoute>
			) : (
				item.element
			);
			return (
				<Route
					key={`RouteApp${index}`}
					path={item.path}
					element={ele}
				/>
			);
		});
	}, []);
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<BrowserRouter>
				{/* <CustomAlert /> */}
				<Routes>{routes}</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
