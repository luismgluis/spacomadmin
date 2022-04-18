interface AppIconProps {
	width?: number;
	height?: number | null;
	color?: string;
	withShadow?: boolean;
}
const AppIcon: React.FC<AppIconProps> = ({
	width = 50,
	height = null,
	color = "#d5d5d5",
	withShadow = false,
}) => {
	if (height === null) height = width;
	const customStyles = {
		filter: withShadow ? `drop-shadow(1px 1px 1px color70` : "",
	};
	return (
		<div className="AppIcon">
			<svg
				style={customStyles}
				xmlns="http: //www.w3.org/2000/svg"
				width={width}
				height={height}
				viewBox="0 0 717.06 229.07"
			>
				<path
					fill="none"
					d="M29.54 29.45H687.52V199.61999999999998H29.54z"
				/>
				<path
					d="M657.08 63.7c19.73 0 30.44 16.87 30.44 35v59.8h-16.59V102q0-11.85-4.28-17.41c-2.86-3.71-5.74-5.56-14.31-5.56s-19.2 5.83-26.25 17.5v62H609.5V102q0-11.85-4.2-17.41c-2.79-3.71-5.77-5.56-14.4-5.56s-19.2 5.83-26.25 17.5v62h-16.59v-93h14.59l2 11.66v2.74h.35c7.78-10.82 20.91-16.23 30.63-16.23 12.74 0 23 6.36 27.71 18.42h.55c7.42-12.28 20.85-18.42 33.19-18.42z"
					fill="#29323b"
					fillRule="evenodd"
				/>
				<path
					d="M440.49 111q0-21.32 12.54-34.39t33.23-13.08q20.69 0 33.32 13.08T532.21 111q0 21.32-12.63 34.39t-33.32 13.11q-20.7 0-33.23-13.08T440.49 111zm25.17 24.45a30.34 30.34 0 0041.38 0q8.87-8.14 8.86-24.54T507 86.49a30.59 30.59 0 00-41.38 0q-8.87 8.06-8.87 24.45t8.91 24.54zM238.15 110.24q0-21.31 12.54-34.39t33.23-13.08q20.68 0 33.32 13.08c10.53 10.91 12.36 23.08 12.43 39.59v46.07h-14.33c-.89-5.17-1.49-9.52-1.88-13.4q-11.82 9.6-29.54 9.6-20.7 0-33.23-13.07t-12.54-34.4zm25.17 24.45a30.31 30.31 0 0041.38 0q8.87-8.15 8.86-24.54T304.7 85.7a30.59 30.59 0 00-41.38 0q-8.88 8.07-8.87 24.45t8.87 24.54z"
					fill="#17769c"
					fillRule="evenodd"
				/>
				<path
					d="M226.57 111q0-21.32-12.54-34.39T180.8 63.56q-20.69 0-33.32 13.08c-10.44 10.81-12.43 25-12.43 39.59v83.39h14.33c.69-4.17 1.51-10.06 2-13.33-.1-13.65-.41-34.21-.09-37.39q11.82 9.6 29.54 9.6 20.7 0 33.23-13.08T226.57 111zm-25.17 24.48a30.34 30.34 0 01-41.38 0q-8.86-8.14-8.86-24.54T160 86.49a30.59 30.59 0 0141.38 0q8.88 8.06 8.87 24.45t-8.85 24.54zM45.72 65a13.65 13.65 0 005.78 11.36 41.68 41.68 0 0014 6.92l18.24 5.39c6.65 2 12.85 3.79 18.6 5.49a26.32 26.32 0 0114.17 10.21c3.69 5.09 5.54 10.11 5.54 19.08a32.36 32.36 0 01-12.67 25.26q-12.66 9.79-35.32 9.79A99.55 99.55 0 0131 148.8v-5.58a100.58 100.58 0 0019.66 7v-4.24A100.63 100.63 0 0131 139v-6.2h.9q18.69 10.42 42.59 10.42 31.46 0 31.46-20.84 0-10.22-15.31-15c-4.37-1.29-9.26-2.76-14.65-4.35s-10.84-3.2-16.29-4.82a75.38 75.38 0 01-15-6.11 29.94 29.94 0 01-11-10.25c-2.7-4.38-4.16-7.34-4.16-15.55s4.1-19.17 12.31-26.24S61.14 29.45 75.1 29.45s26.57 2.16 37.84 6.47v5.52a96.32 96.32 0 00-20-5.18v4.24a95.08 95.08 0 0120 5.18v5.52h-1.26q-16.89-6.83-32.44-6.83T54.7 49.85Q45.72 55.34 45.72 65zM424.48 87.68a53.39 53.39 0 00-30-9c-10.93 0-19.8 3.61-24.44 10a36.94 36.94 0 00-6.76 22.32c.44 7.41 2.45 17.47 6.74 22.33 5.94 6.74 13.51 10 24.44 10a53.39 53.39 0 0030-9h.66l-.54 15.53a59.64 59.64 0 01-31.34 8.59Q373 158.5 360 145.61T347 111q0-21.69 13-34.58t33.26-12.89a59.64 59.64 0 0131.34 8.59l.54 15.53z"
					fill="#29323b"
					fillRule="evenodd"
				/>
				<path fill="none" d="M0 0H717.06V229.07H0z" />
			</svg>
		</div>
	);
};
export default AppIcon;
