import "./AlertTemplate.scss";
import React, { useMemo } from "react";
import CText from "../CText/CText";
import CView from "../CView/CView";
import { Colors } from "../../../themes/Colors";
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
		boxShadow: `${Colors.primary900}40 0px 5px 7px`,
		...style,
	};

	return (
		<div className="AlertTemplate" style={customContainerStyles}>
			<CView variant="flex-horizontal" width={"50vw"} p={5}>
				<CView width="100%" py={10} className="left">
					<CText type="h5" color={"bg800"}>
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
