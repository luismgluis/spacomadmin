import React, { useCallback } from "react";
import { useSessionContext } from "../../context/SessionContext";
import { HomePaySelected } from "../pages/Home/HomePagesData";

export type CurrentConfigType = {
	homePageSelected?: HomePaySelected;
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
	// const config = useCurrentConfig();
	const setConfig = useSetCurrentConfig();

	const toggleSidebar = useCallback(() => {
		setConfig((data) => ({ sideBarMenuOpened: !data.sideBarMenuOpened }));
	}, [setConfig]);

	const setSidebarVisible = useCallback(
		(visible: boolean) => {
			setConfig({ sideBarMenuOpened: visible });
		},
		[setConfig]
	);
	return {
		toggle: toggleSidebar,
		setVisible: setSidebarVisible,
	};
}

export function useSetHomePage() {
	const setConfig = useSetCurrentConfig();
	const change = useCallback(
		(page: HomePaySelected) => {
			setConfig({ homePageSelected: page });
		},
		[setConfig]
	);
	return change;
}
