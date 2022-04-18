import React, { useMemo } from "react";
import "./App.css";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/pages/Login/Login";
import Home from "./components/pages/Home/Home";
import PrivateRoute from "./components/PrivateRoute";
import theme from "./themes/themeProvider";
import {
	SessionContextProvider,
	useSessionContextStore,
} from "./context/SessionContext";

type RoutesType = {
	path: string;
	element: JSX.Element;
	private: boolean;
};

function App() {
	const routes = useMemo(() => {
		const arr: RoutesType[] = [
			{
				path: "/login",
				element: <Login />,
				private: true,
			},
			{
				path: "/home",
				element: <Home />,
				private: true,
			},
			{
				path: "/",
				element: <Home />,
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
	const sessionStore = useSessionContextStore();
	return (
		<ThemeProvider theme={theme}>
			<SessionContextProvider value={sessionStore}>
				<CssBaseline />
				<BrowserRouter>
					<Routes>{routes}</Routes>
				</BrowserRouter>
			</SessionContextProvider>
		</ThemeProvider>
	);
}

export default App;
