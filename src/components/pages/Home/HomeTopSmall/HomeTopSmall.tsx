import { IconButton } from "@mui/material";
import React from "react";
import AppIconLarge from "../../../../icons/AppIcon/AppIconLarge";
import { Colors } from "../../../../themes/Colors";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import CText from "../../../ui/CText/CText";
import CView from "../../../ui/CView/CView";
import MenuIcon from "@mui/icons-material/Menu";
type HomeTopSmallProps = {};
const HomeTopSmall: React.FC<HomeTopSmallProps> = ({}) => {
	const breakXs = useMediaQuery("down", "xs");
	if (!breakXs) return <></>;
	return (
		<CView className="HomeTop" variant="flex-horizontal" p={10}>
			<CView className="menu" flex={1}>
				<div className="logo">
					<AppIconLarge width={breakXs ? 140 : 120} height={40} />
				</div>
			</CView>
			<CView
				style={{ position: "absolute", bottom: 0, left: 0 }}
				bg={Colors.bg500}
				width="100%"
				variant="flex-horizontal"
			>
				<IconButton size="large">
					<MenuIcon fontSize="large" htmlColor="white" />
				</IconButton>
				<CView centerItems>
					<CText color="bg100" type="h5">
						Hola
					</CText>
				</CView>
			</CView>
		</CView>
	);
};
export default HomeTopSmall;
