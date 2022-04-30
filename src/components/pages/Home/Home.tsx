import "./Home.scss";
import React, { useEffect, useMemo, useState } from "react";

import { useCurrentConfig } from "../../hooks/currentConfig";

import CView from "../../ui/CView/CView";
import AdminHome from "../AdminHome/AdminHome";
import HomeTopLarge from "./HomeTopLarge/HomeTopLarge";
import HomeTopSmall from "./HomeTopSmall/HomeTopSmall";
import HomeSidebar from "./HomeSidebar/HomeSidebar";
import Config from "../Config/Config";
import HomeMessaging from "./HomeMessaging";
import Clients from "../Clients/Clients";
import Employees from "../Employees/Employees";
import {
	HomePageSelectedOptions,
	HomePageSelectedOptionsItem,
	HomePaySelected,
	HomePaySelectedGetTitle,
} from "./HomePagesData";

const TAG = "Home";
type HomeProps = {
	prop1?: any;
};

const Home: React.FC<HomeProps> = ({ prop1 }) => {
	const config = useCurrentConfig();
	const [pageSelected, setPageSelected] = useState<HomePaySelected>("home");

	useEffect(() => {
		setPageSelected(config.homePageSelected!);
	}, [config]);

	const homePageSelectedOptions = useMemo<HomePageSelectedOptionsItem[]>(
		() => HomePageSelectedOptions,
		[]
	);

	const currentOption = useMemo(() => {
		return homePageSelectedOptions.filter(
			(item) => item.id === pageSelected
		)[0];
	}, [pageSelected, homePageSelectedOptions]);

	return (
		<CView className="Home">
			<HomeMessaging />
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
