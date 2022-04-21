import React, { useCallback } from "react";
import "./HomeSidebar.scss";

import { HomePaySelected } from "../Home";
import {
	useCurrentConfig,
	useHomeSidebar,
	useSetCurrentConfig,
} from "../../../hooks/currentConfig";
import CView from "../../../ui/CView/CView";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { Colors } from "../../../../themes/Colors";

const TAG = "PAY-SIDER";
type HomeSiderProps = {};
const HomeSider: React.FC<HomeSiderProps> = ({}) => {
	const setConfig = useSetCurrentConfig();
	const config = useCurrentConfig();
	const homeSideBarToggle = useHomeSidebar().toggle;

	const changePage = useCallback(
		(page: HomePaySelected) => {
			setConfig({ homePageSelected: page });
		},
		[setConfig]
	);
	return (
		<>
			{config.sideBarMenuOpened && (
				<CView
					height={"100vh"}
					bg={Colors.bgt600}
					width="100%"
					style={styles.container}
				>
					<IconButton onClick={homeSideBarToggle}>
						<MenuIcon />
					</IconButton>
				</CView>
			)}
		</>
	);
};
const styles: Record<string, React.CSSProperties> = {
	container: {
		position: "absolute",
		zIndex: 100,
	},
};
export default HomeSider;
