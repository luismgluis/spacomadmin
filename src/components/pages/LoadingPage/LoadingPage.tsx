import "./LoadingPage.scss";
import React from "react";
import { Typography } from "@mui/material";
import LoadingPanel from "../../ui/LoadingPanel/LoadingPanel";
const TAG = "LOADING PAGE";
type LoadingPageProps = {
	title?: string;
};
const LoadingPage: React.FC<LoadingPageProps> = ({ title }) => {
	console.log(TAG, "render");
	return (
		<div className="LoadingPage">
			<Typography component="h1" variant="h5">
				{title}
			</Typography>
			<LoadingPanel />
		</div>
	);
};
export default LoadingPage;
