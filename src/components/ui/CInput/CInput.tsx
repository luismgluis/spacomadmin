import "./CInput.scss";
import React, { useMemo, useRef, useState } from "react";
import utils from "../../../libs/utils/utils";

import { useEffect } from "react";
import CView from "../CView/CView";
import { Colors } from "../../../themes/Colors";
import { Input } from "@mui/material";

const TAG = "CUSTOM INPUT";

interface CInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	placeHolder?: string;
	marginX?: number;
	marginY?: number;
	windth?: number | string;
	type?: "password" | "date" | undefined;
	borderColor?: string;
	labelColor?: string;
	onUpdate?: (newVal: string) => void;
}
const CInput: React.FC<CInputProps> = ({
	label = "",
	placeHolder = "",
	onChange = () => null,
	value,
	type,
	name,
	marginY = 0,
	marginX = 0,
	width = "",
	borderColor = "",
	labelColor = "",
	defaultValue,
	autoComplete,
	onUpdate = (newVal: string) => null,
}) => {
	const firstTime = useRef(false);
	const [idInput] = useState(utils.generateKey("idInput"));
	const getColor = (num: string | number) => {
		return (Colors as any)[`primary${num}`];
	};
	const containerStyles = useMemo(() => {
		return {
			paddingTop: marginY,
			paddingBottom: marginY,
			paddingLeft: marginX,
			paddingRight: marginX,
			width: width !== "" ? width : undefined,
		};
	}, [marginX, marginY, width]);

	const inputStyles: React.CSSProperties = {
		backgroundColor: Colors.basic100,
		borderColor: borderColor || getColor(800),
		boxShadow: `0px 5px 7px -1px ${getColor(700)}40`,
		borderLeftColor: borderColor || getColor(800),
		borderLeftStyle: label ? "solid" : "none",
		paddingTop: label ? 25 : 5,
	};

	const labelStyles: React.CSSProperties = {
		backgroundColor: label ? getColor(800) : undefined,
		color: label ? getColor(100) : undefined,
	};

	const customChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange(e);
		onUpdate(e.target.value);
	};
	useEffect(() => {
		if (!firstTime.current && defaultValue) onUpdate(defaultValue + "");
		firstTime.current = true;
	}, [defaultValue, onUpdate]);

	const [showPass, setShowPass] = useState(true);
	const customType = useMemo(() => {
		if (type === "password" && showPass) {
			return "password";
		}
		if (type === "password" && !showPass) {
			return "text";
		}
		if (typeof type !== "undefined") return type;
	}, [type, showPass]);
	return (
		<div className="CInput" style={containerStyles}>
			<div className="CInputContainer" style={inputStyles}>
				{label !== "" && <label style={labelStyles}>{label}</label>}
				<CView variant="flex-horizontal">
					<Input
						id={idInput}
						type={customType}
						name={name}
						value={value}
						autoComplete={autoComplete}
						defaultValue={defaultValue}
						onChange={(e: any) => customChange(e)}
						placeholder={placeHolder}
						style={{ color: getColor(900), width: "100%" }}
					/>
					{type === "password" && (
						<CView px={5}>
							<div
								onClick={() => {
									setShowPass(!showPass);
								}}
							></div>
						</CView>
					)}
				</CView>
			</div>
		</div>
	);
};
export default CInput;
