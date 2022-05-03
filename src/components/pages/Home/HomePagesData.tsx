import AdminHome from "../AdminHome/AdminHome";
import Clients from "../Clients/Clients";
import Config from "../Config/Config";
import Employees from "../Employees/Employees";
import TaskIcon from "@mui/icons-material/Task";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import HandymanIcon from "@mui/icons-material/Handyman";
import EngineeringIcon from "@mui/icons-material/Engineering";
import { Colors } from "../../../themes/Colors";

export type HomePaySelected =
	| "home"
	| "tasks"
	| "clients"
	| "employees"
	| "config";

export type HomePageSelectedOptionsItem = {
	id: HomePaySelected;
	displayName: string;
	headerName: string;
	component: JSX.Element;
	icon?: JSX.Element;
};
export function HomePaySelectedGetTitle(page: HomePaySelected): string {
	switch (page) {
		case "home":
			return "Inicio";
		case "tasks":
			return "Tareas";
		case "clients":
			return "Clientes";
		case "employees":
			return "Empleados";
		case "config":
			return "Configuracion";
		default:
			return "Inicio";
	}
}
export function HomePaySelectedGetIcon(page: HomePaySelected): JSX.Element {
	switch (page) {
		case "home":
			return <TaskIcon htmlColor={Colors.primary100} />;
		case "tasks":
			return <TaskIcon htmlColor={Colors.primary100} />;
		case "clients":
			return <AssignmentIndIcon htmlColor={Colors.primary100} />;
		case "employees":
			return <HandymanIcon htmlColor={Colors.primary100} />;
		case "config":
			return <EngineeringIcon htmlColor={Colors.primary100} />;
		default:
			return <TaskIcon htmlColor={Colors.primary100} />;
	}
}

export const HomePageSelectedOptions: HomePageSelectedOptionsItem[] = [
	{
		id: "home",
		displayName: HomePaySelectedGetTitle("home"),
		headerName: HomePaySelectedGetTitle("home"),
		icon: HomePaySelectedGetIcon("home"),
		component: <AdminHome />,
	},
	{
		id: "tasks",
		displayName: HomePaySelectedGetTitle("tasks"),
		headerName: HomePaySelectedGetTitle("tasks"),
		icon: HomePaySelectedGetIcon("tasks"),

		component: <AdminHome />,
	},
	{
		id: "clients",
		displayName: HomePaySelectedGetTitle("clients"),
		headerName: HomePaySelectedGetTitle("clients"),
		icon: HomePaySelectedGetIcon("clients"),
		component: <Clients />,
	},
	{
		id: "employees",
		displayName: HomePaySelectedGetTitle("employees"),
		headerName: HomePaySelectedGetTitle("employees"),
		icon: HomePaySelectedGetIcon("employees"),
		component: <Employees />,
	},
	{
		id: "config",
		displayName: HomePaySelectedGetTitle("config"),
		headerName: HomePaySelectedGetTitle("config"),
		icon: HomePaySelectedGetIcon("config"),
		component: <Config />,
	},
];
