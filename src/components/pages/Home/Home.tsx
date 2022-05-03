import "./Home.scss";
import React, { useEffect, useMemo, useState } from "react";

import { useCurrentConfig } from "../../hooks/currentConfig";

import CView from "../../ui/CView/CView";
import HomeTopLarge from "./HomeTopLarge/HomeTopLarge";
import HomeTopSmall from "./HomeTopSmall/HomeTopSmall";
import HomeSidebar from "./HomeSidebar/HomeSidebar";
import HomeMessaging from "./HomeMessaging";
import {
	HomePageSelectedOptions,
	HomePageSelectedOptionsItem,
	HomePaySelected,
} from "./HomePagesData";

const TAG = "Home";
type HomeProps = {
	prop1?: any;
};

const Home: React.FC<HomeProps> = ({ prop1 }) => {
	const config = useCurrentConfig();
	const [pageSelected, setPageSelected] = useState<HomePaySelected>("home");
	const [headerHeight, setHeaderHeight] = useState(0);
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
			<CView minHeight={"100vh"} className="HomeContainer">
				<CView
					className="HomeTop"
					onHeightChange={(n) => setHeaderHeight(n)}
				>
					<HomeTopLarge />
					<HomeTopSmall />
				</CView>

				<CView
					className="HomeBody"
					height={`calc(100vh - ${headerHeight}px)`}
					style={styles.homeBody}
				>
					{currentOption?.component}
				</CView>
			</CView>
		</CView>
	);
};

const styles: Record<string, React.CSSProperties> = {
	homeBody: {
		overflowY: "auto",
	},
};
export default Home;
