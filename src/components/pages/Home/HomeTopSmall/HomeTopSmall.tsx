import { IconButton } from "@mui/material";
import React, { useCallback, useState } from "react";
import AppIconLarge from "../../../../icons/AppIcon/AppIconLarge";
import { Colors } from "../../../../themes/Colors";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import CText from "../../../ui/CText/CText";
import CView from "../../../ui/CView/CView";
import MenuIcon from "@mui/icons-material/Menu";
import { useCurrentConfig, useHomeSidebar } from "../../../hooks/currentConfig";
import CreateDivFadeInAnim from "../../../animations/CreateDivFadeInAnim";
import { HomePaySelectedGetTitle } from "../HomePagesData";
const Container = CreateDivFadeInAnim(1);
type HomeTopSmallProps = {};
const HomeTopSmall: React.FC<HomeTopSmallProps> = ({}) => {
	const screenXs = useMediaQuery("down", "sm");
	const homeSideBarToggle = useHomeSidebar().toggle;
	const config = useCurrentConfig();
	const [homeTopHeight, setHomeTopHeight] = useState(0);
	if (!screenXs) return <></>;
	return (
		<Container>
			<CView
				className="HomeTop customShadow"
				p={10}
				bgx="bg100"
				style={styles.homeTop}
				onHeightChange={(v) => setHomeTopHeight(v)}
			>
				<CView style={styles.iconContainer}>
					<AppIconLarge width={115} height={32} />
				</CView>
			</CView>
			<CView height={homeTopHeight} width="100%"></CView>

			<CView
				className="headerBottom"
				style={styles.headerBottom}
				bg={Colors.bg500}
				width="100%"
				variant="flex-horizontal"
			>
				<IconButton size="large" onClick={homeSideBarToggle}>
					<MenuIcon fontSize="large" htmlColor="white" />
				</IconButton>
				<CView centerItems>
					<CText colorx="white" type="h5">
						{HomePaySelectedGetTitle(config.homePageSelected!)}
					</CText>
				</CView>
			</CView>
		</Container>
	);
};
const styles: Record<string, React.CSSProperties> = {
	homeTop: {
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		zIndex: 9,
	},
	iconContainer: {
		display: "flex",
		justifyContent: "space-between",
	},
	headerBottom: {
		boxShadow:
			"rgb(4 42 70 / 30%) -1px -1px 2px 0px, rgb(2 33 56 / 15%) -1px -2px 10px 2px, rgb(0 0 0 / 26%) 0px -4px 4px 0px inset",
		position: "absolute",
		bottom: 0,
		left: 0,
	},
};
export default HomeTopSmall;
