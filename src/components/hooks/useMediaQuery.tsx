import { Breakpoint, Theme } from "@mui/material";
import umq from "@mui/material/useMediaQuery";

export function useMediaQuery(upDown: "up" | "down", query: Breakpoint) {
	const matches = umq((theme: Theme) => {
		const m = theme.breakpoints[upDown]("sm");
		return m;
	});
	console.log(matches);
	return matches;
}
