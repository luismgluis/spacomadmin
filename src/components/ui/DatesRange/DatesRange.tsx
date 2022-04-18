import "./DatesRange.scss";
import React, { useEffect, useRef, useState } from "react";
import CInput from "../CInput/CInput";
import { useScreenSize } from "../../hooks/windowResize";
import utils from "../../../libs/utils/utils";
import CView from "../CView/CView";
const TAG = "DATES RANGE";
type DatesRangeProps = {
	onDateChange: (min: number, max: number) => void;
};
const DatesRange: React.FC<DatesRangeProps> = ({ onDateChange }) => {
	console.log(TAG, "render");
	const screen = useScreenSize(true);
	const [filterDates, setFilterDates] = useState({ min: "", max: "" });
	const lastDates = useRef({ min: 0, max: 0 });
	useEffect(() => {
		const dmin = utils.dates.dateStringInputToDateUnix(filterDates.min);
		const dmax = utils.dates.dateStringInputToDateUnix(filterDates.max);
		if (dmin) {
			if (dmax) {
				if (
					dmin !== lastDates.current.min ||
					dmax !== lastDates.current.max
				) {
					lastDates.current = { min: dmin, max: dmax };
					onDateChange(dmin, dmax);
				}
			}
		}
	}, [filterDates, onDateChange]);

	return (
		<div className="DatesRange">
			<CView
				className="DatesRangeContainer"
				px={10}
				variant="flex-horizontal"
				// flex={!screen.maxSize("xs")}
			>
				<CInput
					label="Fecha minima"
					width={screen.maxSize("xs") ? 160 : undefined}
					onUpdate={(t) => setFilterDates({ ...filterDates, min: t })}
					type="date"
				/>
				<CInput
					label="Fecha maxima"
					width={screen.maxSize("xs") ? 160 : undefined}
					onUpdate={(t) => setFilterDates({ ...filterDates, max: t })}
					type="date"
				/>
			</CView>
		</div>
	);
};
export default DatesRange;
