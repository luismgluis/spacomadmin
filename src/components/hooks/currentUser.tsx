import React, { useEffect } from "react";
import { useSessionContext } from "../../context/SessionContext";

const TAG = "useCurrentUser";
export function useCurrentUser() {
	const session = useSessionContext();
	useEffect(() => {
		console.log("update session user", session);
	}, [session]);

	return session.user;
}
export function useSetCurrentUser() {
	const session = useSessionContext();
	useEffect(() => {
		console.log("update session setUser", session);
	}, [session]);

	return session.setUser;
}
//   const [user, setUser] = useState<UserType>(new UserType("", null));

//   useSelector((store: any) => {
//     try {
//       const newUser: UserType = store.reducerSesion.currentUser;
//       if (!utils.objects.isEmpty(newUser)) {
//         if (!newUser.isEmpty()) {
//           if (user.id !== newUser.id) {
//             setUser(new UserType(newUser.id, newUser.exportToUpload()));
//           }
//         }
//         return new UserType(newUser.id, newUser);
//       }
//     } catch (error) {
//       console.log(TAG, error);
//     }
//     return new UserType("", null);
//   });

//   return user;
// }

//   const dispatch = useDispatch();
//   const callBack = useCallback(
//     (user: UserType) => {
//       dispatch(reduxSesion.setCurrentUser(user));
//     },
//     [dispatch]
//   );
//   return callBack;
// }
