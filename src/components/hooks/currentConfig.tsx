import React from "react";
import { useSessionContext } from "../../context/SessionContext";
import { HomePaySelected } from "../pages/Home/Home";

export type CurrentConfigType = {
	homePageSelected: HomePaySelected;
	siderMenuOpened?: boolean;
};

export function useCurrentConfig() {
	const session = useSessionContext();
	return session.config;
}
export function useSetCurrentConfig() {
	const session = useSessionContext();
	return session.setConfig;
}
//   useSelector((store: any) => {
//     try {
//       const newData: CurrentConfigType = store.reducerConfig;
//       if (!utils.objects.isEmpty(newData)) {
//         if (newData.homePageSelected !== oldData.homePageSelected) {
//           setOldData(newData);
//           return newData;
//         }
//       }
//     } catch (error) {
//       console.log(TAG, error);
//     }
//     return null;
//   });

//   return oldData;
// }

// export function useSetCurrentConfig() {
//   const dispatch = useDispatch();
//   const callBack = useCallback(
//     (data: CurrentConfigType) => {
//       dispatch(reduxSesion.setCurrentConfig(data));
//     },
//     [dispatch]
//   );
//   return callBack;
// }
