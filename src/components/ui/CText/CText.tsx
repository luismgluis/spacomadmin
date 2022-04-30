import { Typography } from "@mui/material";
import React from "react";
import { Colors } from "../../../themes/Colors";
import {
	CustomStylesFontType,
	CustomStylesType,
} from "../CView/useCustomViewStyles";

const TAG = "CUSTOM TEXT";

type CTextProps = CustomStylesType &
	CustomStylesFontType & {
		className?: string;
		type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
		size?: number;
		color?: string;
		style?: React.CSSProperties;
		children?: JSX.Element | string;
	};
const CText: React.FC<CTextProps> = (props) => {
	const customStyles: React.CSSProperties = {
		color: props.colorx ? Colors[props.colorx] : props.color,
		fontSize: props.size ? props.size : undefined,
		...props.style,
	};
	if (props.type === "h1")
		return (
			<Typography
				variant="h1"
				className={props.className}
				style={customStyles}
			>
				{props.children}
			</Typography>
		);
	if (props.type === "h2")
		return (
			<Typography
				variant="h2"
				className={props.className}
				style={customStyles}
			>
				{props.children}
			</Typography>
		);
	if (props.type === "h3")
		return (
			<Typography
				variant="h3"
				className={props.className}
				style={customStyles}
			>
				{props.children}
			</Typography>
		);
	if (props.type === "h4")
		return (
			<Typography
				variant="h4"
				className={props.className}
				style={customStyles}
			>
				{props.children}
			</Typography>
		);
	if (props.type === "h5")
		return (
			<Typography
				variant="h5"
				className={props.className}
				style={customStyles}
			>
				{props.children}
			</Typography>
		);
	if (props.type === "h6")
		return (
			<Typography
				variant="h6"
				className={props.className}
				style={customStyles}
			>
				{props.children}
			</Typography>
		);
	if (props.type === "p")
		return (
			<Typography
				variant="caption"
				className={props.className}
				style={customStyles}
			>
				{props.children}
			</Typography>
		);
	return <h5 style={customStyles}>{props.children}</h5>;
};
export default CText;
