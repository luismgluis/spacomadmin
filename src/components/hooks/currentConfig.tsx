import React, { useCallback } from "react";
import { useSessionContext } from "../../context/SessionContext";
import { HomePaySelected } from "../pages/Home/Home";

export type CurrentConfigType = {
	homePageSelected: HomePaySelected;
	sideBarMenuOpened?: boolean;
};

export function useCurrentConfig() {
	const session = useSessionContext();
	return session.config;
}
export function useSetCurrentConfig() {
	const session = useSessionContext();
	return session.setConfig;
}

export function useHomeSidebar() {
	const config = useCurrentConfig();
	const setConfig = useSetCurrentConfig();

	const toggleSidebar = useCallback(() => {
		setConfig({ ...config, sideBarMenuOpened: !config.sideBarMenuOpened });
	}, [config, setConfig]);
	const setSidebarVisible = useCallback(
		(visible: boolean) => {
			setConfig({ ...config, sideBarMenuOpened: visible });
		},
		[config, setConfig]
	);
	return {
		toggle: toggleSidebar,
		setVisible: setSidebarVisible,
	};
}
