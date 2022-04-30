import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../../../api/Api";
type PublicRedirectProps = {};
const PublicRedirect: React.FC<PublicRedirectProps> = ({}) => {
	const navigate = useNavigate();

	useEffect(() => {
		const unsubs = Api.app.getCurrentUser(async (userResult) => {
			if (userResult) {
				const userData: any = await Api.database.user
					.getUser(userResult.uid)
					.catch(() => null);
				if (userData) {
					navigate("/admin");
					return;
				}
			}

			return () => unsubs();
		});
	}, [navigate]);
	return <></>;
};
export default PublicRedirect;
