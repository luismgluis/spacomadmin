import React, { useCallback, useState } from "react";
import AppIconLarge from "../../../../icons/AppIcon/AppIconLarge";
import HomeSider from "../HomeSider/HomeSider";
import "./HomeTop.scss";
import { HomePaySelected } from "../Home";
import {
	useCurrentConfig,
	useSetCurrentConfig,
} from "../../../hooks/currentConfig";
import { useMediaQuery } from "../../../hooks/useMediaQuery";

const TAG = "HOME TOP";
type HomeTopProps = {
	prop1?: any;
};
const HomeTop: React.FC<HomeTopProps> = ({ prop1 }) => {
	console.log(TAG, "render");
	const setConfig = useSetCurrentConfig();
	const config = useCurrentConfig();
	const [sideVisible, setSideVisible] = useState(false);
	const breakXs = useMediaQuery("up", "xs");
	const handleChange = useCallback(
		(force: boolean | null = null) => {
			if (force !== null) {
				setSideVisible(force);
				return;
			}
			setSideVisible(!sideVisible);
		},
		[sideVisible]
	);
	const changePage = useCallback(
		(page: HomePaySelected) => {
			handleChange(false);
			setConfig({ homePageSelected: page });
		},
		[setConfig, handleChange]
	);

	return (
		<div className="HomeTop">
			<div className="menu">
				<div className="logo">
					<a href="https://spacom.co">
						<AppIconLarge width={breakXs ? 100 : 120} height={60} />
					</a>
				</div>
			</div>
			<HomeSider
				hidden={sideVisible}
				onHidden={(res) => setSideVisible(res)}
			/>
		</div>
	);
};
export default HomeTop;
