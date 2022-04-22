import React from "react";
import AppIconLarge from "../../../../icons/AppIcon/AppIconLarge";
import CreateDivFadeInAnim from "../../../animations/CreateDivFadeInAnim";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import CView from "../../../ui/CView/CView";
const Container = CreateDivFadeInAnim(1);
type HomeTopLargeProps = {};
const HomeTopLarge: React.FC<HomeTopLargeProps> = ({}) => {
	const screenXs = useMediaQuery("down", "sm");
	if (screenXs) return <></>;

	return (
		<Container>
			<CView className="HomeTop" variant="flex-horizontal" p={10}>
				<CView className="menu" flex={1}>
					<div className="logo">
						<AppIconLarge
							width={screenXs ? 140 : 120}
							height={40}
						/>
					</div>
				</CView>
			</CView>
		</Container>
	);
};
export default HomeTopLarge;
