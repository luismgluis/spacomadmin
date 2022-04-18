import "./CButton.scss";
import React from "react";

import { useTheme } from "../../hooks/useTheme";
const TAG = "CUSTOM BUTTON";
interface CButtonProps {
  className?: string;
  text?: any;
  width?: number | string;
  onPress?: () => void;
  danger?: boolean;
  marginX?: number | string;
  fontColor?: string;
  fontSize?: number;
  background?: string;
  hoverBackground?: string;
  ghost?: boolean;
}
const CButton: React.FC<CButtonProps> = ({
  text,
  onPress = () => null,
  danger = false,
  width = "100%",
  marginX,
  ghost,
  fontColor,
  fontSize = 18,
  background,

  hoverBackground,
  className,
}) => {
  console.log(TAG);
  const theme = useTheme();
  const textIcon = () => {
    return (
      <h5
        style={{
          fontSize: fontSize,
          color: fontColor ? fontColor : theme.colors["color-primary-900"],
        }}
      >
        {text}
      </h5>
    );
  };
  if (danger) {
    background = theme.colors["color-danger-500"];
    hoverBackground = theme.colors["color-danger-100"];
  }
  return <button></button>;
};
export default CButton;
