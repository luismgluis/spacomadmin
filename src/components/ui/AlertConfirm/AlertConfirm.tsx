import "./AlertConfirm.scss";
import React from "react";
import CModal from "../CModal/CModal";
import CText from "../CText/CText";
import CButton from "../CButton/CButton";
import CView from "../CView/CView";
const TAG = "AlertConfirm";
type AlertConfirmProps = {
	show: boolean;
	onClose: (res: boolean) => void;
	title: string;
	text: string;
};
const AlertConfirm: React.FC<AlertConfirmProps> = ({
	show,
	onClose,
	title,
	text,
}) => {
	console.log(TAG, "render");
	return (
		<div>
			<CModal modalShow={show} onClose={() => onClose(false)}>
				<div className="AlertConfirm">
					<CView p={20}>
						<div className="AlertConfirmTitleContainer">
							<CText>{title}</CText>
							<CText type="p">{text}</CText>
						</div>

						<CView variant="flex-horizontal">
							<CButton mx={10} onPress={() => onClose(true)}>
								Si
							</CButton>
							<CButton mx={10} onPress={() => onClose(false)}>
								No
							</CButton>
						</CView>
					</CView>
				</div>
			</CModal>
		</div>
	);
};
export default AlertConfirm;
