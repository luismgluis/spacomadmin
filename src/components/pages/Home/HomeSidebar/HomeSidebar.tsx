import React from "react";
import "./HomeSidebar.scss";

import { useCurrentConfig, useHomeSidebar } from "../../../hooks/currentConfig";
import CView from "../../../ui/CView/CView";
import { IconButton } from "@mui/material";
import { Colors } from "../../../../themes/Colors";
import AppIconLarge from "../../../../icons/AppIcon/AppIconLarge";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import { ArrowBack } from "@mui/icons-material";
import CreateDivFadeInLeftAnim from "../../../animations/CreateDivFadeInLeftAnim";

import LogoutIcon from "@mui/icons-material/Logout";
import HomeSidebarListItems from "./HomeSidebarListItems";
import HomeSidebarBottom from "./HomeSidebarBottom";

const Container = CreateDivFadeInLeftAnim(0.3);

type HomeSiderProps = {};
const HomeSider: React.FC<HomeSiderProps> = ({}) => {
	const config = useCurrentConfig();
	const screenXs = useMediaQuery("down", "sm");
	const homeSideBarToggle = useHomeSidebar().toggle;

	return (
		<>
			{(config.sideBarMenuOpened || !screenXs) && (
				<Container
					className="containerAnim"
					style={screenXs ? styles.containerXS : styles.containerXL}
					onClick={(e: any) => {
						e.stopPropagation();
						homeSideBarToggle();
					}}
				>
					<CView
						className="homeSidebarMenu"
						height={"100vh"}
						bg={Colors.bg600}
						width={screenXs ? "50%" : "100%"}
						style={styles.subContainer}
						onClick={(e) => {
							e.stopPropagation();
							console.log("tocaste el menu");
						}}
					>
						<CView py={20} bg={Colors.bg100} centerItems>
							<AppIconLarge
								width={screenXs ? 140 : 120}
								height={40}
							/>
						</CView>
						<HomeSidebarListItems />
						<HomeSidebarBottom />
					</CView>
				</Container>
			)}
		</>
	);
};
const styles: Record<string, React.CSSProperties> = {
	containerXS: {
		position: "absolute",
		zIndex: 100,
		background: Colors.bgt600,
		width: "100%",
		height: "100vh",
	},
	containerXL: {
		background: Colors.bgt600,
		width: "20%",
		maxWidth: 215,
		height: "100vh",
	},
	subContainer: {
		position: "relative",
		borderRightStyle: "solid",
		borderRightWidth: "4px",
		borderRightColor: Colors.bg700,
	},
};
export default HomeSider;
