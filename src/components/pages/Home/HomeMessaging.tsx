import React, { useEffect } from "react";
import Api from "../../../api/Api";
type HomeMessagingProps = {};
const HomeMessaging: React.FC<HomeMessagingProps> = ({}) => {
	useEffect(() => {
		let unsubs = () => {};
		unsubs = Api.messaging.messagesListener((msj) => {
			console.log("Show", msj);
		});
		return () => {
			console.log("UNSUBS", "FAIL");
			unsubs();
		};
	});
	return <></>;
};
export default HomeMessaging;
