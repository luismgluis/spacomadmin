import "./Login.scss";
import React from "react";
import { Colors } from "../../../themes/Colors";

const TAG = "LOGIN ILUSTRATION";
type LoginIlustrationProps = {
	height: number;
};

const LoginIlustration: React.FC<LoginIlustrationProps> = ({ height }) => {
	console.log(TAG);

	return (
		<div style={{ height: height }} className="LoginIlustration">
			<div
				className="loginIlustrationPanel1"
				style={{
					backgroundColor: Colors.bg100,
					height: height * 0.9,
				}}
			>
				<h1 style={{ color: Colors.bg700 }}>Welcome</h1>
			</div>
			<div
				className="loginIlustrationPanel2"
				style={{
					backgroundColor: Colors.bg800,
					height: height * 0.1,
				}}
			></div>
			<div className="loginIlustrationPanel3"></div>
		</div>
	);
};
export default LoginIlustration;
