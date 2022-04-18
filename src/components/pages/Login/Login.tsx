import "./Login.scss";
import React, { useMemo, useState } from "react";

import LoginForm from "./LoginForm";
import LoginRegister from "./LoginRegister";
import CView from "../../ui/CView/CView";
import { Colors } from "../../../themes/Colors";
const TAG = "LOGIN";
type LoginProps = {
	prop1?: any;
};
const Login: React.FC<LoginProps> = ({ prop1 }) => {
	console.log(TAG);
	console.log(TAG, "login load");

	const customContainerStyles: React.CSSProperties = {
		backgroundColor: Colors.bg900,
	};

	const [registerEnabled, setRegisterEnabled] = useState(false);

	return (
		<CView className="Login" style={customContainerStyles}>
			<CView className="loginContainer">
				<CView className="subContainer">
					{!registerEnabled && (
						<LoginForm
							onGoToNext={() => setRegisterEnabled(true)}
						/>
					)}
					{registerEnabled && (
						<LoginRegister
							onGoToBack={() => setRegisterEnabled(false)}
						/>
					)}
				</CView>
			</CView>
			<CView className="animBack"></CView>
		</CView>
	);
};
export default Login;
