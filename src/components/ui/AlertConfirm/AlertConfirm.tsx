import "./AlertConfirm.scss";
import React from "react";
import CModal from "../CModal/CModal";
import Panel from "../Panel/Panel";
import CText from "../CText/CText";
import CButton from "../CButton/CButton";
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
          <Panel paddingX={20} paddingY={20}>
            <div className="AlertConfirmTitleContainer">
              <CText>{title}</CText>
              <CText type="p">{text}</CText>
            </div>

            <Panel flex flexDirection="row">
              <CButton text="Si" marginX={10} onPress={() => onClose(true)} />
              <CButton text="No" marginX={10} onPress={() => onClose(false)} />
            </Panel>
          </Panel>
        </div>
      </CModal>
    </div>
  );
};
export default AlertConfirm;
