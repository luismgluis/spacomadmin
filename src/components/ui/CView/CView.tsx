import React, { useEffect, useRef } from "react";
import { CustomStylesType, useCustomStyles } from "./useCustomViewStyles";

type ViewProps = React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
>;

type CViewProps = ViewProps &
	CustomStylesType & {
		centerItems?: boolean;
		absoluteTop?: boolean;
		absoluteBottom?: boolean;
		onHeightChange?: (n: number) => void;
	};

const CView: React.FC<CViewProps> = (props) => {
	const ref = useRef<HTMLDivElement>(null);
	const customStyles: any = useCustomStyles(props);
	useEffect(() => {
		if (!props.onHeightChange) return;
		const ss = ref.current?.clientHeight;
		props.onHeightChange(Number(ss));
	}, [props.children]);

	if (props.variant === "scroll")
		return (
			<div
				ref={ref}
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
			ref={ref}
			{...props}
			style={{
				...(props.centerItems ? styles.centerItems : {}),
				...(props.absoluteTop ? styles.absoluteTop : {}),
				...(props.absoluteBottom ? styles.absoluteBottom : {}),
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
	absoluteBottom: {
		paddingLeft: 390,
		zIndex: 9,
		position: "absolute",
		top: 230,
		width: "100%",
	},
};
export default CView;
