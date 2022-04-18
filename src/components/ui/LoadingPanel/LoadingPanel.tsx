import React from "react";
import { SpinnerCircular } from "spinners-react";
import { Colors } from "../../../themes/Colors";
const TAG = "LOADING PANEL";
type LoadingPanelProps = {
	prop1?: any;
};
const LoadingPanel: React.FC<LoadingPanelProps> = ({ prop1 }) => {
	console.log(TAG, "render");
	return (
		<div className="LoadingPanel">
			<SpinnerCircular
				size={50}
				thickness={100}
				speed={100}
				color={Colors.primary100}
				secondaryColor={Colors.primary100}
			/>
		</div>
	);
};
export default LoadingPanel;
