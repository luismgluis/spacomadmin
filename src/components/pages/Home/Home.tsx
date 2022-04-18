import "./Home.scss";
import React, { useEffect, useMemo, useState } from "react";

import Pay from "../Pay/Pay";

import HomeTop from "./HomeTop/HomeTop";
import { useCurrentConfig } from "../../hooks/currentConfig";
import Wifi from "../Wifi/Wifi";
import CView from "../../ui/CView/CView";

const TAG = "Home";
type HomeProps = {
	prop1?: any;
};
export type HomePaySelected = "pay" | "wifi";
type HomePageSelectedOptionsItem = {
	id: HomePaySelected;
	displayName: string;
	headerName: string;
	component: JSX.Element;
};
const Home: React.FC<HomeProps> = ({ prop1 }) => {
	console.log(TAG, "render");
	const config = useCurrentConfig();
	const [pageSelected, setPageSelected] = useState<HomePaySelected>("pay");

	useEffect(() => setPageSelected(config.homePageSelected), [config]);

	const homePageSelectedOptions = useMemo<HomePageSelectedOptionsItem[]>(
		() => [
			{
				id: "pay",
				displayName: "Pagos",
				headerName: "PAGOS",
				component: <Pay />,
			},
			{
				id: "wifi",
				displayName: "Wifi",
				headerName: "WIFI",
				component: <Wifi />,
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
		<CView className="Home" display="flex">
			<CView minHeight={"100vh"}>
				<HomeTop />
				<CView>{currentOption?.component}</CView>
			</CView>
		</CView>
	);
};

export default Home;
