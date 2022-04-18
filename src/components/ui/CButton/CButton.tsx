import "./CButton.scss";
import React from "react";
import {
	CustomStylesType,
	useCustomStyles,
} from "../CView/useCustomViewStyles";
import { Colors } from "../../../themes/Colors";
import { Button } from "@mui/material";

const TAG = "CUSTOM BUTTON";
type CButtonProps = {
	className?: string;
	onPress?: () => void;
	mode?: "danger" | "primary" | "optional";
	children?: string | JSX.Element;
	ghost?: boolean;
	actionx?: "submit";
} & CustomStylesType;

const CButton: React.FC<CButtonProps> = (props) => {
	const styles = useCustomStyles(props);
	if (props.mode === "danger") {
		props.bg = Colors.secondary500;
		props.radius = 20;
		styles.border = 0;
	}
	return (
		<Button
			{...(props as any)}
			type={props.actionx || undefined}
			// action={props.action || ""}
			variant={!props.ghost ? "contained" : "text"}
			style={styles}
			onClick={() => props.onPress && props.onPress()}
		></Button>
	);
};
export default CButton;
