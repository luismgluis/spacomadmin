import { ArrowBack } from "@mui/icons-material";
import {
	IconButton,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import React from "react";
import { useHomeSidebar } from "../../../hooks/currentConfig";
import CView from "../../../ui/CView/CView";
import LogoutIcon from "@mui/icons-material/Logout";
import { Colors } from "../../../../themes/Colors";
import CText from "../../../ui/CText/CText";
import Api from "../../../../api/Api";
const styles: Record<string, React.CSSProperties> = {
	container: {
		position: "absolute",
		bottom: 0,
		left: 0,
		width: "100%",
	},
	toggleSideBar: {
		display: "flex",
		flexDirection: "row-reverse",
	},
};

type HomeSidebarBottomProps = {};
const HomeSidebarBottom: React.FC<HomeSidebarBottomProps> = ({}) => {
	const homeSideBarToggle = useHomeSidebar().toggle;

	return (
		<CView style={styles.container}>
			<CView style={styles.toggleSideBar}>
				<ListItemButton
					sx={{
						bgcolor: Colors.secondary500,
						":hover": {
							bgcolor: Colors.secondary700,
						},
					}}
					href="#simple-list"
					onClick={() => {
						console.log("close");
						Api.app.logOut();
					}}
				>
					<ListItemIcon>
						<LogoutIcon />
					</ListItemIcon>
					<CText type="h6" size={16} blond>
						Cerrar sesion
					</CText>
				</ListItemButton>
			</CView>
			{/* <CView style={styles.toggleSideBar}>
				<IconButton onClick={homeSideBarToggle}>
					<ArrowBack htmlColor="white" />
				</IconButton>
			</CView> */}
		</CView>
	);
};

export default HomeSidebarBottom;
