import React, { useContext, useState } from "react";
import Business from "../classes/Business";
import User from "../classes/User";
import { CurrentConfigType } from "../components/hooks/currentConfig";

export const SessionContext = React.createContext({
	user: new User(null),
	setUser: (user: User) => {},
	business: new Business(null),
	setBusiness: (business: Business) => {},
	config: { homePageSelected: "home" } as CurrentConfigType,
	setConfig: (config: CurrentConfigType) => {},
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
	return { user, setUser, business, setBusiness, config, setConfig };
}
