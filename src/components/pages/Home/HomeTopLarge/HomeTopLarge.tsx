import Menu from "@mui/icons-material/Menu";
import { ButtonBase, IconButton } from "@mui/material";
import React from "react";
import AppIconLarge from "../../../../icons/AppIcon/AppIconLarge";
import { Colors } from "../../../../themes/Colors";
import CreateDivFadeInAnim from "../../../animations/CreateDivFadeInAnim";
import { useHomeSidebar } from "../../../hooks/currentConfig";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import CView from "../../../ui/CView/CView";
const Container = CreateDivFadeInAnim(1);
type HomeTopLargeProps = {};
const HomeTopLarge: React.FC<HomeTopLargeProps> = ({}) => {
	const screenXs = useMediaQuery("down", "sm");
	const homeSideBarToggle = useHomeSidebar().toggle;

	if (screenXs) return <></>;

	return (
		<Container>
			<CView className="HomeTop" variant="flex-horizontal" p={10}>
				<CView variant="flex-horizontal">
					<ButtonBase onClick={homeSideBarToggle}>
						<Menu fontSize="large" htmlColor={Colors.primary500} />
					</ButtonBase>

					<CView className="icon" centerItems pl={20}>
						<AppIconLarge
							width={screenXs ? 140 : 120}
							height={50}
						/>
					</CView>
				</CView>
			</CView>
		</Container>
	);
};
export default HomeTopLarge;
