import { useLayoutEffect, useState } from "react";
import utils from "../../../libs/utils/utils";
import { Colors } from "../../../themes/Colors";

type mp = "auto" | string | number;
export type CustomStylesType = {
	variant?: "flex-horizontal" | "flex-vertital" | "scroll";
	m?: mp;
	my?: mp;
	mx?: mp;
	mt?: mp;
	mb?: mp;
	ml?: mp;
	mr?: mp;
	p?: mp;
	px?: mp;
	py?: mp;
	pl?: mp;
	pr?: mp;
	pt?: mp;
	pb?: mp;
	//background
	bg?: "black" | "white" | "blue" | string;
	bgx?: keyof typeof Colors;
	// font color
	color?: string;
	//shadow
	withShadow?: boolean;
	//
	width?: string | number;
	height?: string | number;
	minHeight?: string | number;
	//
	radius?: number;
	//
	display?:
		| "block"
		| "inline"
		| "run-in"
		| "flow"
		| "flow-root"
		| "table"
		| "flex"
		| "grid"
		| "ruby"
		| "subgrid"
		| "list-item"
		| "flow list-item block"
		| "contents"
		| "none"
		| "inline-block"
		| "inline-table"
		| "inline-flex"
		| "inline-grid";
	flex?: number;
};

export type CustomStylesFontType = {
	variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
	color?: string;
	blond?: boolean;
	numberOfLines?: number;
	width?: string | number;
	colorx?: keyof typeof Colors;
};
export function useCustomStyles(props: any) {
	const [styles, setStyles] = useState<React.CSSProperties>({});
	useLayoutEffect(() => {
		let newStyles: React.CSSProperties = utils.objects.cloneObject(
			props.style
		);
		switch (props.variant || "") {
			case "flex-horizontal":
				newStyles = {
					...newStyles,
					display: "flex",
					flexDirection: "row",
				};
				break;
			case "flex-vertital":
				newStyles = {
					...newStyles,
					display: "flex",
					flexDirection: "column",
				};
				break;
			default:
				break;
		}
		switch (props.variant) {
			case "h1":
				newStyles.fontSize = 30;
				break;
			case "h2":
				newStyles.fontSize = 28;
				break;
			case "h3":
				newStyles.fontSize = 24;
				break;
			case "h4":
				newStyles.fontSize = 20;
				break;
			case "h5":
				newStyles.fontSize = 18;
				break;
			case "h6":
				newStyles.fontSize = 14;
				break;
			default:
				break;
		}
		if (props.fontSize) {
			newStyles.fontSize = props.fontSize;
		}
		//padding
		if (props.p) {
			newStyles.paddingLeft = props.p;
			newStyles.paddingRight = props.p;
			newStyles.paddingTop = props.p;
			newStyles.paddingBottom = props.p;
		}
		if (props.px) {
			newStyles.paddingLeft = props.px;
			newStyles.paddingRight = props.px;
		}
		if (props.py) {
			newStyles.paddingTop = props.py;
			newStyles.paddingBottom = props.py;
		}
		if (props.pl) {
			newStyles.paddingLeft = props.pl;
		}
		if (props.pr) {
			newStyles.paddingRight = props.pr;
		}
		if (props.pt) {
			newStyles.paddingTop = props.pt;
		}
		if (props.pb) {
			newStyles.paddingBottom = props.pb;
		}
		//margin
		if (props.m) {
			newStyles.marginTop = props.m;
			newStyles.marginBottom = props.m;
			newStyles.marginLeft = props.m;
			newStyles.marginRight = props.m;
		}
		if (props.mx) {
			newStyles.marginLeft = props.mx;
			newStyles.marginRight = props.mx;
		}
		if (props.my) {
			newStyles.marginTop = props.my;
			newStyles.marginBottom = props.my;
		}
		if (props.ml) {
			newStyles.marginLeft = props.ml;
		}
		if (props.mr) {
			newStyles.marginRight = props.mr;
		}
		if (props.mt) {
			newStyles.marginTop = props.mt;
		}
		if (props.mb) {
			newStyles.marginBottom = props.mb;
		}

		if (props.bg) {
			newStyles.backgroundColor = props.bg;
		}
		if (props.withShadow) {
			newStyles.boxShadow =
				"0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)";
		}
		if (props.width) {
			newStyles.width = props.width;
		}
		if (props.height) newStyles.height = props.height;
		if (props.minHeight) newStyles.minHeight = props.minHeight;
		//
		if (props.radius)
			//
			newStyles.borderRadius = props.radius;
		//
		if (props.color) {
			newStyles.color = props.color;
		}
		if (props.blond) {
			newStyles.fontWeight = "700";
		}
		if (props.flex) newStyles.flex = props.flex;

		const pColor: keyof typeof Colors = props.colorx;
		if (props.colorx) newStyles.color = Colors[pColor];
		setStyles(newStyles);
	}, [props]);

	return styles;
}
