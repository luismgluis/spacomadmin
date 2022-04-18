import React from "react";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
type HomeTopLargeProps = {};
const HomeTopLarge: React.FC<HomeTopLargeProps> = ({}) => {
	const breakXs = useMediaQuery("down", "xs");
	if (breakXs) return <></>;

	return <></>;
};
export default HomeTopLarge;
