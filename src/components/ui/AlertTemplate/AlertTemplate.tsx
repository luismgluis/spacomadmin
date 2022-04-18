import "./AlertTemplate.scss";
import React, { useMemo } from "react";
import CText from "../CText/CText";
import { useTheme } from "../../hooks/useTheme";
import { useScreenSize } from "../../hooks/windowResize";
import CView from "../CView/CView";
const TAG = "ALERT TEMPLATE";
type AlertTemplateProps = {
	style: any;
	options: any;
	message: any;
	close: any;
};
const AlertTemplate: React.FC<AlertTemplateProps> = ({
	style,
	options,
	message,
	close,
}) => {
	// console.log(TAG);
	const theme = useTheme();
	const data = useMemo(() => {
		const obj = JSON.parse(message);
		try {
			return {
				title: obj["title"],
				text: obj["text"],
			};
		} catch (error) {
			return {
				title: obj["title"],
				text: message,
			};
		}
	}, [message]);

	const customContainerStyles: React.CSSProperties = {
		boxShadow: `${theme.colors["color-primary-900"]}40 0px 5px 7px`,
		...style,
	};
	const screen = useScreenSize(true);

	return (
		<div className="AlertTemplate" style={customContainerStyles}>
			<CView variant="flex-horizontal" width={screen.winX * 0.5} p={5}>
				<CView width="100%" py={10} className="left">
					<CText type="h5" color={"color-primary-800"}>
						{data.text}
					</CText>
					{data.title && <CText>{data.title}</CText>}
				</CView>
				<div className="right"></div>
			</CView>
		</div>
	);
};
export default AlertTemplate;
