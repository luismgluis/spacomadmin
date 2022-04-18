import React, { useCallback } from "react";
import "./HomeSider.scss";

import { HomePaySelected } from "../Home";
import {
	useCurrentConfig,
	useSetCurrentConfig,
} from "../../../hooks/currentConfig";
import CView from "../../../ui/CView/CView";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";

const TAG = "PAY-SIDER";
type HomeSiderProps = {};
const HomeSider: React.FC<HomeSiderProps> = ({}) => {
	const setConfig = useSetCurrentConfig();
	const config = useCurrentConfig();
	const changePage = useCallback(
		(page: HomePaySelected) => {
			setConfig({ homePageSelected: page });
		},
		[setConfig]
	);
	return (
		<>
			{config.siderMenuOpened && (
				<CView height={"100vh"} bg="black" width="10%">
					<IconButton>
						<MenuIcon />
					</IconButton>
				</CView>
			)}
		</>
	);
};
export default HomeSider;
