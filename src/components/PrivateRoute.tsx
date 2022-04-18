import React, { useEffect, useState } from "react";
import User from "../classes/User";
import { Navigate } from "react-router";
import Api from "../api/Api";
import LoadingPage from "./pages/LoadingPage/LoadingPage";
import {
	useCurrentUser,
	useSetCurrentUser,
} from "../components/hooks/currentUser";
const TAG = "PRIVATE ROUTE";
type PrivateRouteProps = {
	blockRedirect: boolean;
	children?: JSX.Element;
	path?: string;
};
const PrivateRoute: React.FC<PrivateRouteProps> = ({
	children,
	blockRedirect,
	path,
}) => {
	console.log(TAG, "render");
	// const [me, setMe] = useState(new User(null));
	const [hasSession, setHasSession] = useState(0);
	const me = useCurrentUser();
	const setMe = useSetCurrentUser();
	// const setBusiness = useSetCurrentBusiness();

	useEffect(() => {
		const uid = sessionStorage.getItem("uid");
		if (uid) {
			setHasSession(2); //yes
			return;
		}
		setHasSession(1); //no
	}, []);

	useEffect(() => {
		setHasSession(2);
		const unsubs = Api.app.getCurrentUser(async (userResult) => {
			setHasSession(2);
			if (userResult) {
				const userData: any = await Api.database.user
					.getUser(userResult.uid)
					.catch(() => null);
				if (userData) {
					const user = new User(userData);
					sessionStorage.setItem("uid", user.id);
					setMe(user);
					setHasSession(3);
					return;
				}
			}
			setMe(new User(null));
			setHasSession(3);
			return () => unsubs();
		});
	}, [setMe]);

	const hasUser = !me.isEmpty;

	if (blockRedirect) return <React.Fragment>{children}</React.Fragment>;
	if (hasSession <= 1 && !hasUser) return <LoadingPage />;
	if (hasUser) return <React.Fragment>{children}</React.Fragment>;
	if (hasSession === 3 && !hasUser) return <Navigate to="/login" />;
	return <></>;
};
export default PrivateRoute;
