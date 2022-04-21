import "./Home.scss";
import React, { useEffect, useMemo, useState } from "react";

import { useCurrentConfig } from "../../hooks/currentConfig";

import CView from "../../ui/CView/CView";
import AdminHome from "../AdminHome/AdminHome";
import HomeTopLarge from "./HomeTopLarge/HomeTopLarge";
import HomeTopSmall from "./HomeTopSmall/HomeTopSmall";
import HomeSidebar from "./HomeSidebar/HomeSidebar";
import Config from "../Config/Config";

const TAG = "Home";
type HomeProps = {
	prop1?: any;
};
export type HomePaySelected =
	| "home"
	| "tasks"
	| "clients"
	| "employees"
	| "config";
type HomePageSelectedOptionsItem = {
	id: HomePaySelected;
	displayName: string;
	headerName: string;
	component: JSX.Element;
};
const Home: React.FC<HomeProps> = ({ prop1 }) => {
	console.log(TAG, "render");
	const config = useCurrentConfig();
	const [pageSelected, setPageSelected] = useState<HomePaySelected>("home");

	useEffect(() => setPageSelected(config.homePageSelected), [config]);

	const homePageSelectedOptions = useMemo<HomePageSelectedOptionsItem[]>(
		() => [
			{
				id: "home",
				displayName: "Inicio",
				headerName: "Inicio",
				component: <AdminHome />,
			},
			{
				id: "config",
				displayName: "Configuracion",
				headerName: "Configuracion",
				component: <Config />,
			},
		],
		[]
	);

	const currentOption = useMemo(() => {
		return homePageSelectedOptions.filter(
			(item) => item.id === pageSelected
		)[0];
	}, [pageSelected, homePageSelectedOptions]);

	return (
		<CView className="Home">
			<HomeSidebar />
			<CView minHeight={"100vh"}>
				<HomeTopLarge />
				<HomeTopSmall />
				<CView>{currentOption?.component}</CView>
			</CView>
		</CView>
	);
};

export default Home;
