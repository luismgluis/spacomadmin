import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { Colors } from "../../../../themes/Colors";
import { useHomeSidebar, useSetHomePage } from "../../../hooks/currentConfig";
import CView from "../../../ui/CView/CView";

import TaskIcon from "@mui/icons-material/Task";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import HandymanIcon from "@mui/icons-material/Handyman";
import EngineeringIcon from "@mui/icons-material/Engineering";
import { HomePaySelected } from "../HomePagesData";

type HomeSideListItemProps = {
	title: string;
	page: HomePaySelected;
	icon: JSX.Element;
};
const HomeSideListItem: React.FC<HomeSideListItemProps> = ({
	title,
	page,
	icon,
}) => {
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
			<ListItemIcon>{icon}</ListItemIcon>
			<ListItemText
				style={{ color: Colors.primary100 }}
				primary={title}
			/>
		</ListItemButton>
	);
};

type HomeSidebarListItemsProps = {};
const HomeSidebarListItems: React.FC<HomeSidebarListItemsProps> = ({}) => {
	return (
		<CView className="homeSidebarListItems">
			<HomeSideListItem
				title="Tareas"
				page="home"
				icon={<TaskIcon htmlColor={Colors.primary100} />}
			/>
			<HomeSideListItem
				title="Clientes"
				page="clients"
				icon={<AssignmentIndIcon htmlColor={Colors.primary100} />}
			/>
			<HomeSideListItem
				title="Empleados"
				page="employees"
				icon={<HandymanIcon htmlColor={Colors.primary100} />}
			/>
			<HomeSideListItem
				title="Configuraciones"
				page="config"
				icon={<EngineeringIcon htmlColor={Colors.primary100} />}
			/>
		</CView>
	);
};
export default HomeSidebarListItems;
