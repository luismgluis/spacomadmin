import React from "react";
import { CustomStylesType, useCustomStyles } from "./useCustomViewStyles";

type ViewProps = React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
>;

type CViewProps = ViewProps &
	CustomStylesType & {
		centerItems?: boolean;
		absoluteTop?: boolean;
	};

const CView: React.FC<CViewProps> = (props) => {
	const customStyles: any = useCustomStyles(props);
	if (props.variant === "scroll")
		return (
			<div
				{...props}
				style={{
					...customStyles,
					width: customStyles?.width || undefined,
					height: customStyles?.height || undefined,
				}}
			></div>
		);
	return (
		<div
			{...props}
			style={{
				...(props.centerItems ? styles.centerItems : {}),
				...(props.absoluteTop ? styles.absoluteTop : {}),
				...customStyles,
			}}
		/>
	);
};
const styles: Record<string, React.CSSProperties> = {
	centerItems: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	absoluteTop: {
		zIndex: 9,
		position: "absolute",
		top: 0,
		width: "100%",
	},
};
export default CView;
