import { ArrowBack } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useHomeSidebar } from "../../../hooks/currentConfig";
import CView from "../../../ui/CView/CView";

const styles: Record<string, React.CSSProperties> = {
	container: {
		position: "absolute",
		bottom: 0,
		left: 0,
	},
};

type HomeSidebarBottomProps = {};
const HomeSidebarBottom: React.FC<HomeSidebarBottomProps> = ({}) => {
	const homeSideBarToggle = useHomeSidebar().toggle;

	// return <LogoutIcon htmlColor="white" />;
	return (
		<CView style={styles.container}>
			<CView>
				<IconButton onClick={homeSideBarToggle}>
					<CView absoluteBottom>
						<ArrowBack htmlColor="white" />
					</CView>
				</IconButton>
			</CView>
		</CView>
	);
};

export default HomeSidebarBottom;
