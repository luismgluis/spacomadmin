import { IconButton } from "@mui/material";
import React, { useCallback } from "react";
import AppIconLarge from "../../../../icons/AppIcon/AppIconLarge";
import { Colors } from "../../../../themes/Colors";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import CText from "../../../ui/CText/CText";
import CView from "../../../ui/CView/CView";
import MenuIcon from "@mui/icons-material/Menu";
import { useHomeSidebar } from "../../../hooks/currentConfig";
import CreateDivFadeInAnim from "../../../animations/CreateDivFadeInAnim";
const Container = CreateDivFadeInAnim(1);
type HomeTopSmallProps = {};
const HomeTopSmall: React.FC<HomeTopSmallProps> = ({}) => {
	const screenXs = useMediaQuery("down", "sm");
	const homeSideBarToggle = useHomeSidebar().toggle;

	if (!screenXs) return <></>;
	return (
		<Container>
			<CView className="HomeTop" variant="flex-horizontal" p={10}>
				<CView className="menu" flex={1}>
					<div className="logo">
						<AppIconLarge
							width={screenXs ? 140 : 120}
							height={40}
						/>
					</div>
				</CView>
				<CView
					style={{ position: "absolute", bottom: 0, left: 0 }}
					bg={Colors.bg500}
					width="100%"
					variant="flex-horizontal"
				>
					<IconButton size="large" onClick={homeSideBarToggle}>
						<MenuIcon fontSize="large" htmlColor="white" />
					</IconButton>
					<CView centerItems>
						<CText color="bg100" type="h5">
							Hola
						</CText>
					</CView>
				</CView>
			</CView>
		</Container>
	);
};
export default HomeTopSmall;
