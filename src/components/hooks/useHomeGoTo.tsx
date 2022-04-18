import React, { useCallback, useRef, useState } from "react";

type HomeGotoType = {
	screen: any;
	parms: any;
};
// export function useHomeGoTo() {
//   const [data, setData] = useState<HomeGotoType>({
//     screen: "search",
//     parms: null,
//   });
//   const oldData = useRef<HomeGotoType>({
//     screen: "search",
//     parms: null,
//   });
//   useSelector((store: any) => {
//     try {
//       const lng: HomeGotoType = store.reducerGeneralValues.homeGoTo;
//       if (typeof lng !== "undefined") {
//         if (lng !== null) {
//           if (
//             oldData.current.screen !== lng.screen ||
//             oldData.current.parms !== lng.parms
//           ) {
//             setData(lng);
//           }
//           oldData.current = lng;
//         }
//       }
//       return lng;
//     } catch (error) {}
//     return 0;
//   });

//   return data;
// }

export function useSetHomeGoTo() {}
