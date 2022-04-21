import React, { useCallback } from "react";
import "./HomeSidebar.scss";

import { HomePaySelected } from "../Home";
import {
	useCurrentConfig,
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
	const changePage = useCallback(
		(page: HomePaySelected) => {
			setConfig({ homePageSelected: page });
		},
		[setConfig]
	);
	return (
		<>
			{config.siderMenuOpened && (
				<CView
					height={"100vh"}
					bg={Colors.bg700}
					width="10%"
					style={styles.container}
				>
					<IconButton>
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
