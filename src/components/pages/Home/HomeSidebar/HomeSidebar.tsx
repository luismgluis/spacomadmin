import React from "react";
import "./HomeSidebar.scss";

import {
	useCurrentConfig,
	useHomeSidebar,
	useSetHomePage,
} from "../../../hooks/currentConfig";
import CView from "../../../ui/CView/CView";
import MenuIcon from "@mui/icons-material/Menu";
import {
	IconButton,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import { Colors } from "../../../../themes/Colors";
import AppIconLarge from "../../../../icons/AppIcon/AppIconLarge";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import { ArrowBack, Send } from "@mui/icons-material";
import { HomePaySelected } from "../Home";
import CreateDivFadeInLeftAnim from "../../../animations/CreateDivFadeInLeftAnim";

const Container = CreateDivFadeInLeftAnim(0.3);
// const SubContainer = CreateDivFadeInLeftAnim(0.3);

type HomeSideListItemProps = {
	title: string;
	page: HomePaySelected;
};
const HomeSideListItem: React.FC<HomeSideListItemProps> = ({ title, page }) => {
	const setHomePage = useSetHomePage();
	const homeSideBarVisible = useHomeSidebar().setVisible;

	return (
		<ListItemButton
			href="#simple-list"
			onClick={() => {
				setHomePage(page);
				homeSideBarVisible(false);
			}}
		>
			<ListItemIcon>
				<Send htmlColor={Colors.primary100} />
			</ListItemIcon>
			<ListItemText
				style={{ color: Colors.primary100 }}
				primary={title}
			/>
		</ListItemButton>
	);
};

type HomeSiderProps = {};
const HomeSider: React.FC<HomeSiderProps> = ({}) => {
	const config = useCurrentConfig();
	const screenXs = useMediaQuery("down", "sm");
	const homeSideBarToggle = useHomeSidebar().toggle;

	return (
		<>
			{config.sideBarMenuOpened && (
				<Container
					style={styles.container}
					onClick={(e: any) => {
						e.stopPropagation();
						homeSideBarToggle();
					}}
				>
					<CView
						className="homeSidebarMenu"
						height={"100vh"}
						bg={Colors.bg600}
						width="50%"
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
						<CView className="homeSidebarListItems">
							<HomeSideListItem title="Tareas" page="home" />
							<HomeSideListItem title="Clientes" page="clients" />
							<HomeSideListItem
								title="Empleados"
								page="employees"
							/>
							<HomeSideListItem
								title="Configuraciones"
								page="config"
							/>
						</CView>
						<IconButton onClick={homeSideBarToggle}>
							<ArrowBack htmlColor="white" />
						</IconButton>
					</CView>
				</Container>
			)}
		</>
	);
};
const styles: Record<string, React.CSSProperties> = {
	container: {
		position: "absolute",
		zIndex: 100,
		background: Colors.bgt600,
		width: "100%",
		height: "100vh",
	},
	subContainer: {
		borderRightStyle: "solid",
		borderRightWidth: "4px",
		borderRightColor: Colors.bg700,
	},
};
export default HomeSider;
