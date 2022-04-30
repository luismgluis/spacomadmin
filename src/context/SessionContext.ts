import React, { useContext, useRef, useState } from "react";
import Business from "../classes/Business";
import User from "../classes/User";
import { CurrentConfigType } from "../components/hooks/currentConfig";

type CurrentConfigTypeFn = (config: CurrentConfigType) => CurrentConfigType;

export const SessionContext = React.createContext({
	user: new User(null),
	setUser: (user: User) => {},
	business: new Business(null),
	setBusiness: (business: Business) => {},
	config: { homePageSelected: "home" } as CurrentConfigType,
	setConfig: (config: CurrentConfigType | CurrentConfigTypeFn) => {},
});

export const SessionContextProvider = SessionContext.Provider;

export function useSessionContext() {
	const session = useContext(SessionContext);
	return session;
}

export function useSessionContextStore() {
	const [user, setUser] = useState(new User(null));
	const [business, setBusiness] = useState(new Business(null));
	const [config, setConfig] = useState<CurrentConfigType>({
		homePageSelected: "home",
	});
	const configRef = useRef(config);
	const customSetConfig = (
		config: CurrentConfigType | CurrentConfigTypeFn
	) => {
		if (typeof config === "function") {
			const res = config({ ...configRef.current });
			const newData = { ...configRef.current, ...res };
			configRef.current = newData;
			setConfig(newData);
			return;
		}
		const newData = { ...configRef.current, ...config };
		configRef.current = newData;
		setConfig(newData);
	};

	return {
		user,
		setUser,
		business,
		setBusiness,
		config,
		setConfig: customSetConfig,
	};
}
